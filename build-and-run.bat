@echo off
echo Building Accounting Dashboard for Production...
echo.
echo Step 1: Building React app...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed!
    pause
    exit /b 1
)

echo.
echo Step 2: Building Electron main process...
call npm run build-electron
if %errorlevel% neq 0 (
    echo Electron build failed!
    pause
    exit /b 1
)

echo.
echo Step 3: Starting Electron app...
call npm run electron