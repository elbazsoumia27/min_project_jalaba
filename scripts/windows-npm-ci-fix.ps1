$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

Write-Host "[ci-fix] Project: $projectRoot"
Write-Host "[ci-fix] Stopping React/webpack node.exe processes (to release file locks)..."
$nodeProcesses = Get-CimInstance Win32_Process -Filter "Name='node.exe'" -ErrorAction SilentlyContinue
foreach ($p in $nodeProcesses) {
  $cmd = $p.CommandLine
  if (-not $cmd) { continue }

  # Only stop dev-server related processes (avoid killing npm itself)
  if ($cmd -match "react-scripts" -or $cmd -match "webpack" -or $cmd -match "\\\\react-scripts\\\\scripts\\\\start\\.js") {
    Write-Host "[ci-fix] Stopping PID $($p.ProcessId)" 
    Stop-Process -Id $p.ProcessId -Force -ErrorAction SilentlyContinue
  }
}

$cachePaths = @(
  "node_modules\\.cache\\babel-loader",
  "node_modules\\.cache"
)

foreach ($p in $cachePaths) {
  if (Test-Path $p) {
    Write-Host "[ci-fix] Removing $p"
    Remove-Item -Recurse -Force $p -ErrorAction SilentlyContinue
  }
}

Write-Host "[ci-fix] Running npm ci..."
& npm ci
if ($LASTEXITCODE -eq 0) {
  Write-Host "[ci-fix] npm ci succeeded."
  exit 0
}

Write-Host "[ci-fix] npm ci failed (exit $LASTEXITCODE). Trying a full node_modules reset..."
if (Test-Path "node_modules") {
  Remove-Item -Recurse -Force "node_modules" -ErrorAction SilentlyContinue
}

& npm ci
exit $LASTEXITCODE
