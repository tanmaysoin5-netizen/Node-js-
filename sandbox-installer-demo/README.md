# sandbox-installer-demo
Practical 8

## Sandbox Package Installer
This project demonstrates how to programmatically install an npm package inside an isolated sandbox folder with a deterministic package-lock.json.

# Features
Creates a temporary /sandbox folder automatically.
Runs npm init and installs a chosen package version.
Generates a reproducible package-lock.json.
Verifies installation with checksum and integrity info.
Keeps your main project clean (no global installs).

## How It Works
The script:
Deletes any old /sandbox folder.
Creates a new one.
Initializes npm and installs the chosen package (default: lodash@4.17.21).
Reads the generated package-lock.json.
Calculates a checksum for verification.