@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

echo ========================================================
echo        Google Antigravity 통합 한글 패치 설치 프로그램
echo       (UI 한국어화 + AI 에이전트 한국어 전역 규칙 설정)
echo ========================================================
echo.

set "TARGET_DIR=%LOCALAPPDATA%\Programs\Antigravity\resources"
set "APP_EXE=%LOCALAPPDATA%\Programs\Antigravity\Antigravity.exe"
set "GEMINI_DIR=%USERPROFILE%\.gemini"
set "RULE_FILE=%GEMINI_DIR%\GEMINI.md"

if not exist "%TARGET_DIR%" (
    echo [오류] Antigravity 설치 경로를 찾을 수 없습니다.
    echo 확인된 경로: %TARGET_DIR%
    echo Antigravity가 정상적으로 설치되어 있는지 확인해주세요.
    echo.
    pause
    exit /b 1
)

echo [1/5] 실행 중인 Antigravity 프로세스를 확인하고 있습니다...
tasklist /fi "imagename eq Antigravity.exe" 2>nul | find /i "Antigravity.exe" >nul
if %errorlevel% equ 0 (
    echo Antigravity가 실행 중입니다. 안전한 패치를 위해 앱을 종료합니다...
    taskkill /f /im Antigravity.exe >nul 2>&1
    timeout /t 2 /nobreak >nul
)
echo      - 완료되었습니다.
echo.

echo [2/5] 원본 파일 백업을 생성하고 있습니다...
if exist "%TARGET_DIR%\app.asar" (
    if not exist "%TARGET_DIR%\app.asar.original.bak" (
        copy /y "%TARGET_DIR%\app.asar" "%TARGET_DIR%\app.asar.original.bak" >nul
        echo      - 원본 백업이 성공적으로 생성되었습니다: app.asar.original.bak
    ) else (
        echo      - 기존 원본 백업이 이미 존재하여 보존합니다: app.asar.original.bak
    )
)
echo.

echo [3/5] 한글 패치(UI)를 적용하고 있습니다...
if exist "%~dp0app.asar" (
    copy /y "%~dp0app.asar" "%TARGET_DIR%\app.asar" >nul
    if exist "%~dp0korean_dict.json" (
        copy /y "%~dp0korean_dict.json" "%TARGET_DIR%\korean_dict.json" >nul
    )
    echo      - UI 패치 파일 복사 완료.
) else (
    if exist "%~dp0patcher.py" (
        echo      - patcher.py를 통해 직접 패치합니다...
        python "%~dp0patcher.py"
        if %errorlevel% neq 0 (
            echo [오류] 패치 중 문제가 발생했습니다. 원본을 복구합니다.
            if exist "%TARGET_DIR%\app.asar.original.bak" (
                copy /y "%TARGET_DIR%\app.asar.original.bak" "%TARGET_DIR%\app.asar" >nul
            )
            pause
            exit /b 1
        )
    ) else (
        echo [오류] 적용할 패치 파일(app.asar 또는 patcher.py)을 찾을 수 없습니다.
        pause
        exit /b 1
    )
)
echo.

echo [4/5] AI 에이전트 한국어 전역 규칙(Global Rules)을 설정하고 있습니다...
if not exist "%GEMINI_DIR%" (
    mkdir "%GEMINI_DIR%" >nul 2>&1
)

if exist "%RULE_FILE%" (
    if not exist "%RULE_FILE%.bak" (
        copy /y "%RULE_FILE%" "%RULE_FILE%.bak" >nul 2>&1
    )
)

(
echo # Global Rules
echo.
echo ## Language ^& Communication
echo - 모든 대화, 질문 답변, 코드 분석 및 설명은 반드시 한국어로 작성합니다.
echo - 생성하거나 수정하는 코드의 주석 및 문서(docstring^)는 명확한 한국어로 작성합니다.
echo - 기술 용어는 필요 시 한글 표기와 원문을 병기합니다.
) > "%RULE_FILE%"

echo      - 에이전트 한국어 대화 및 주석 규칙 설정 완료 (%RULE_FILE%)
echo.

echo [5/5] 모든 한글화 설정이 성공적으로 완료되었습니다!
echo.
set /p RUN_APP="지금 바로 Antigravity를 실행하시겠습니까? (Y/N): "
if /i "%RUN_APP%"=="Y" (
    if exist "%APP_EXE%" (
        start "" "%APP_EXE%"
    )
)

echo.
echo 이용해 주셔서 감사합니다!
echo 문제 발생 시 언제든 uninstall.bat을 실행하면 원래대로 복원됩니다.
timeout /t 3 >nul
exit /b 0
