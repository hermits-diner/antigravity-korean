@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

echo ========================================================
echo     Google Antigravity 에코시스템 한글 패치 삭제 (원복)
echo ========================================================
echo.

set "APP20_DIR=%LOCALAPPDATA%\Programs\Antigravity\resources"
set "IDE_DIR=%LOCALAPPDATA%\Programs\Antigravity IDE"
set "IDE_EXT_DIR=%IDE_DIR%\resources\app\extensions\antigravity"
set "GEMINI_DIR=%USERPROFILE%\.gemini"
set "RULE_FILE=%GEMINI_DIR%\GEMINI.md"

echo [1/4] 실행 중인 프로세스를 확인하고 종료합니다...
taskkill /f /im Antigravity.exe >nul 2>&1
taskkill /f /im "Antigravity IDE.exe" >nul 2>&1
timeout /t 1 /nobreak >nul
echo      - 완료되었습니다.
echo.

echo [2/4] Antigravity 2.0 원본 파일을 복원합니다...
if exist "%APP20_DIR%\app.asar.original.bak" (
    copy /y "%APP20_DIR%\app.asar.original.bak" "%APP20_DIR%\app.asar" >nul
    del /f /q "%APP20_DIR%\korean_dict.json" >nul 2>&1
    echo      - Antigravity 2.0 app.asar 원본 복원 완료.
)
echo.

echo [3/4] Antigravity IDE 패치 내용을 복원합니다...
if exist "%IDE_EXT_DIR%\cascade-panel.html.bak" (
    copy /y "%IDE_EXT_DIR%\cascade-panel.html.bak" "%IDE_EXT_DIR%\cascade-panel.html" >nul
    del /f /q "%IDE_EXT_DIR%\cascade-panel.html.bak" >nul 2>&1
    del /f /q "%IDE_EXT_DIR%\standalone_injector.js" >nul 2>&1
    echo      - Antigravity IDE cascade-panel.html 원본 복원 완료.
)
echo.

echo [4/4] 공통 AI 에이전트 규칙 파일을 복원합니다...
if exist "%RULE_FILE%.bak" (
    copy /y "%RULE_FILE%.bak" "%RULE_FILE%" >nul 2>&1
    del /f /q "%RULE_FILE%.bak" >nul 2>&1
    echo      - GEMINI.md 규칙 파일 이전 백업 복원 완료.
)
echo.

echo 원본 복원이 성공적으로 완료되었습니다!
timeout /t 3 >nul
exit /b 0
