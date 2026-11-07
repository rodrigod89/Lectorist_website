@echo off
setlocal
cd /d "%~dp0" || exit /b 1

where npx.cmd >nul 2>&1
if errorlevel 1 (
  echo Install Node.js to preview the Lectorist website locally.
  pause
  exit /b 1
)

call npx.cmd --yes serve --listen tcp://127.0.0.1:3000 --no-port-switching --no-clipboard docs
if errorlevel 1 (
  pause
  exit /b 1
)
