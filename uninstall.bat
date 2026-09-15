@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

echo ========================================================
echo        Google Antigravity 한글 패치 삭제 (원상 복원)
echo ========================================================
echo.

set "TARGET_DIR=%LOCALAPPDATA%\Programs\Antigravity\resources"
set "APP_EXE=%LOCALAPPDATA%\Programs\Antigravity\Antigravity.exe"

if not exist "%TARGET_DIR%" (
    echo [오류] Antigravity 설치 경로를 찾을 수 없습니다.
    echo 확인된 경로: %TARGET_DIR%
    pause
    exit /b 1
)

echo [1/3] 실행 중인 Antigravity 프로세스를 확인하고 있습니다...
tasklist /fi "imagename eq Antigravity.exe" 2>nul | find /i "Antigravity.exe" >nul
if %errorlevel% equ 0 (
    echo Antigravity가 실행 중입니다. 안전한 복원을 위해 앱을 종료합니다...
    taskkill /f /im Antigravity.exe >nul 2>&1
    timeout /t 2 /nobreak >nul
)
echo      - 완료되었습니다.
echo.

echo [2/3] 백업된 원본 파일을 복원하고 있습니다...
if exist "%TARGET_DIR%\app.asar.original.bak" (
    copy /y "%TARGET_DIR%\app.asar.original.bak" "%TARGET_DIR%\app.asar" >nul
    echo      - app.asar가 최초 원본 파일로 복원되었습니다.
) else (
    echo [경고] app.asar.original.bak 백업 파일이 없습니다.
    echo Antigravity를 재설치하시면 완전히 초기화할 수 있습니다.
    pause
    exit /b 1
)

if exist "%TARGET_DIR%\korean_dict.json" (
    del /f /q "%TARGET_DIR%\korean_dict.json" >nul 2>&1
)
echo.

echo [3/3] 원본 복원이 성공적으로 완료되었습니다!
echo.
set /p RUN_APP="지금 바로 Antigravity를 실행하시겠습니까? (Y/N): "
if /i "%RUN_APP%"=="Y" (
    if exist "%APP_EXE%" (
        start "" "%APP_EXE%"
    )
)

timeout /t 2 >nul
exit /b 0
