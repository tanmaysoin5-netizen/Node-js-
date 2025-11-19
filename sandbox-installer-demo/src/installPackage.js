// src/installPackage.js
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const SANDBOX_DIR = path.resolve("./sandbox");
const PACKAGE_NAME = "lodash@4.17.21"; // change this if you want another package

async function run() {
  try {
    console.log("🔹 Preparing sandbox...");

    // 1. Create sandbox folder
    if (fs.existsSync(SANDBOX_DIR)) fs.rmSync(SANDBOX_DIR, { recursive: true, force: true });
    fs.mkdirSync(SANDBOX_DIR, { recursive: true });

    // 2. Initialize npm project
    execSync("npm init -y", { cwd: SANDBOX_DIR, stdio: "inherit" });

    // 3. Install specific package version
    console.log(`📦 Installing ${PACKAGE_NAME} inside sandbox...`);
    execSync(`npm install ${PACKAGE_NAME} --no-audit --no-fund --no-package-lock=false`, {
      cwd: SANDBOX_DIR,
      stdio: "inherit",
    });

    // 4. Check files
    const lockPath = path.join(SANDBOX_DIR, "package-lock.json");
    if (!fs.existsSync(lockPath)) throw new Error("❌ package-lock.json not generated!");

    console.log("✅ Deterministic package-lock.json generated.");

    // 5. Load and verify installed package
    const lockData = JSON.parse(fs.readFileSync(lockPath, "utf8"));
    const pkgName = PACKAGE_NAME.split("@")[0];
    const pkgInfo =
      lockData.packages?.[`node_modules/${pkgName}`] ||
      lockData.dependencies?.[pkgName];

    if (!pkgInfo) throw new Error(`Package info for ${pkgName} not found in lockfile.`);

    // 6. Compute checksum of local package.json
    const installedPkgJson = path.join(SANDBOX_DIR, "node_modules", pkgName, "package.json");
    const pkgContent = fs.readFileSync(installedPkgJson);
    const localHash = crypto.createHash("sha256").update(pkgContent).digest("hex");

    console.log(`📘 Installed: ${pkgName}`);
    console.log(`📦 Version: ${pkgInfo.version}`);
    console.log(`🔒 Lockfile integrity: ${pkgInfo.integrity}`);
    console.log(`🧩 Local checksum: ${localHash}`);

    console.log("✅ Sandbox installation complete!");
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

run();
