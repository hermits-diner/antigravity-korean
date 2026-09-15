@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

echo ========================================================
echo        Google Antigravity 에코시스템 통합 한글 패치
echo         [Antigravity 2.0 & Antigravity IDE 지원]
echo ========================================================
echo.

set "APP20_DIR=%LOCALAPPDATA%\Programs\Antigravity\resources"
set "APP20_EXE=%LOCALAPPDATA%\Programs\Antigravity\Antigravity.exe"

set "IDE_DIR=%LOCALAPPDATA%\Programs\Antigravity IDE"
set "IDE_EXT_DIR=%IDE_DIR%\resources\app\extensions\antigravity"
set "IDE_ARGV=%USERPROFILE%\.antigravity-ide\argv.json"
set "IDE_EXE=%IDE_DIR%\Antigravity IDE.exe"

set "GEMINI_DIR=%USERPROFILE%\.gemini"
set "RULE_FILE=%GEMINI_DIR%\GEMINI.md"

echo [1/5] 실행 중인 Antigravity 프로세스를 확인하고 있습니다...
tasklist /fi "imagename eq Antigravity.exe" 2>nul | find /i "Antigravity.exe" >nul
if %errorlevel% equ 0 (
    echo      - Antigravity 2.0이 실행 중입니다. 안전한 패치를 위해 앱을 종료합니다...
    taskkill /f /im Antigravity.exe >nul 2>&1
)

tasklist /fi "imagename eq Antigravity IDE.exe" 2>nul | find /i "Antigravity IDE.exe" >nul
if %errorlevel% equ 0 (
    echo      - Antigravity IDE가 실행 중입니다. 안전한 패치를 위해 앱을 종료합니다...
    taskkill /f /im "Antigravity IDE.exe" >nul 2>&1
)
timeout /t 2 /nobreak >nul
echo      - 프로세스 확인 완료.
echo.

echo [2/5] Antigravity 2.0 (데스크톱 앱) 한글 패치를 확인하고 적용합니다...
if exist "%APP20_DIR%" (
    if exist "%APP20_DIR%\app.asar" (
        if not exist "%APP20_DIR%\app.asar.original.bak" (
            copy /y "%APP20_DIR%\app.asar" "%APP20_DIR%\app.asar.original.bak" >nul
            echo      - 원본 백업 생성 완료: app.asar.original.bak
        )
    )
    if exist "%~dp0app.asar" (
        copy /y "%~dp0app.asar" "%APP20_DIR%\app.asar" >nul
        if exist "%~dp0korean_dict.json" (
            copy /y "%~dp0korean_dict.json" "%APP20_DIR%\korean_dict.json" >nul
        )
        echo      - Antigravity 2.0 UI 한글 패치 적용 완료.
    ) else (
        echo      - [안내] 패치 파일(app.asar)을 찾을 수 없어 건너뜁니다.
    )
) else (
    echo      - [안내] Antigravity 2.0 설치 폴더가 감지되지 않아 건너뜁니다.
)
echo.

echo [3/5] Antigravity IDE 한국어 환경 및 AI 패널 패치를 적용합니다...
if exist "%IDE_DIR%" (
    if exist "%IDE_EXT_DIR%" (
        if not exist "%IDE_EXT_DIR%\cascade-panel.html.bak" (
            copy /y "%IDE_EXT_DIR%\cascade-panel.html" "%IDE_EXT_DIR%\cascade-panel.html.bak" >nul 2>&1
        )
        if exist "%~dp0standalone_injector.js" (
            copy /y "%~dp0standalone_injector.js" "%IDE_EXT_DIR%\standalone_injector.js" >nul 2>&1
        )
        (
            echo ^<!doctype html^>
            echo ^<html^>
            echo   ^<body style="margin: 0"^>
            echo     ^<div id="react-app" class="react-app-container"^>^</div^>
            echo     ^<script src="./standalone_injector.js"^>^</script^>
            echo   ^</body^>
            echo ^</html^>
        ) > "%IDE_EXT_DIR%\cascade-panel.html"
        echo      - IDE 사이드바 AI 패널 한글화 스크립트 주입 완료.
    )

    if exist "%USERPROFILE%\.antigravity-ide" (
        if not exist "%IDE_ARGV%" (
            (
                echo {
                echo     "locale": "ko"
                echo }
            ) > "%IDE_ARGV%"
            echo      - IDE 한국어 언어 로캘 설정 완료.
        )
    )
    echo      - Antigravity IDE 한글화 구성 완료.
) else (
    echo      - [안내] Antigravity IDE 설치 폴더가 감지되지 않아 건너뜁니다.
)
echo.

echo [4/5] 두 환경 공통: AI 에이전트 한국어 전역 규칙(Global Rules)을 설정합니다...
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

echo      - 공통 규칙 등록 완료: %RULE_FILE%
echo        (Antigravity 2.0과 Antigravity IDE의 모든 에이전트에 공통 적용됩니다)
echo.

echo [5/5] 모든 한글화 설정이 성공적으로 완료되었습니다!
echo.
echo 1) Antigravity 2.0 실행
echo 2) Antigravity IDE 실행
echo 3) 종료
echo.
set /p RUN_CHOICE="실행할 앱 번호를 입력하세요 (1/2/3): "
if "%RUN_CHOICE%"=="1" (
    if exist "%APP20_EXE%" start "" "%APP20_EXE%"
) else if "%RUN_CHOICE%"=="2" (
    if exist "%IDE_EXE%" start "" "%IDE_EXE%"
)

echo.
echo 이용해 주셔서 감사합니다!
echo 언제든 uninstall.bat을 실행하면 원래대로 복원됩니다.
timeout /t 3 >nul
exit /b 0
