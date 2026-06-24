@echo off
echo === DevStudio Portfolio - Push to GitHub ===
echo.

set NODE_PATH=C:\Users\Jxy\AppData\Local\Programs\node-v22.19.0-win-x64
set PATH=%NODE_PATH%;%PATH%

cd /d "C:\Users\Jxy\Documents\Codex\2026-06-24\wo-r"

echo Step 1: Add all changes...
git add -A

echo Step 2: Commit (with auto-timestamp)...
git commit -m "Update: %date% %time%"

echo Step 3: Push to GitHub...
echo.
echo Make sure you have set up the remote first:
echo   git remote add origin https://github.com/YOUR_USERNAME/devstudio-portfolio.git
echo.
git push origin master 2>&1

echo.
echo === Done! ===
pause