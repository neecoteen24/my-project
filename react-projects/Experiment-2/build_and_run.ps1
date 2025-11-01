# Helper script to build the React app and create+run the Docker image
# Usage: Open PowerShell as administrator (if needed) and run from this folder.

Set-Location -Path (Split-Path -Path $MyInvocation.MyCommand.Path -Parent)

Write-Host "Installing dependencies..."
if (Test-Path package-lock.json) {
  npm ci
} else {
  npm install
}

Write-Host "Building production bundle..."
npm run build

Write-Host "Building Docker image (will require Docker Desktop / daemon to be running)..."
docker build --platform linux/amd64 -t experiment-2:latest -f Dockerfile .

Write-Host "Running container on http://localhost:8080 ..."
docker run --rm -d -p 8080:80 --name experiment-2-run experiment-2:latest

Write-Host "Done. Visit http://localhost:8080 to verify the app. To stop the container: docker stop experiment-2-run"
