(function () {
  'use strict';

  // --- 언어 모드 선택 (korean: 순수 한글, bilingual: 한영 병기, off: 영문 원본) ---
  const MODES = {
    KOREAN: 'korean',
    BILINGUAL: 'bilingual',
    OFF: 'off'
  };

  // 전역 모드 스위처 등록
  window.__antigravity_set_lang_mode = function (mode) {
    if (Object.values(MODES).includes(mode)) {
      localStorage.setItem('antigravity_i18n_mode', mode);
      console.log('[Antigravity-i18n] Language mode changed to:', mode);
      window.location.reload();
    }
  };

  window.__antigravity_get_lang_mode = function () {
    return localStorage.getItem('antigravity_i18n_mode') || window.__default_lang_mode || 'bilingual';
  };

  const currentMode = window.__antigravity_get_lang_mode();
  console.log('[Antigravity-i18n] Active localization mode:', currentMode);

  const isBilingual = currentMode === MODES.BILINGUAL;

  const KOREAN_EXACT = {
    "File": "파일",
    "파일 (File)": "파일",
    "파일": "파일",
    "Edit": "수정",
    "수정 (Edit)": "수정",
    "편집": "편집",
    "편집 (Edit)": "편집",
    "View": "보기",
    "보기 (View)": "보기",
    "보기": "보기",
    "Window": "윈도우",
    "윈도우 (Window)": "윈도우",
    "창크기": "윈도우",
    "Help": "도움말",
    "도움말 (Help)": "도움말",
    "도움말": "도움말",
    "New Window": "새 창",
    "새 창 (New Window)": "새 창",
    "새 창": "새 창",
    "Zoom In": "확대",
    "확대 (Zoom In)": "확대",
    "Zoom in": "확대",
    "확대": "확대",
    "Zoom Out": "축소",
    "축소 (Zoom Out)": "축소",
    "Zoom out": "축소",
    "축소": "축소",
    "Reset Zoom": "원래 크기로",
    "원래 크기로 (Reset Zoom)": "원래 크기로",
    "Reset zoom": "원래 크기로",
    "원래 크기로": "원래 크기로",
    "Actual Size": "실제 크기",
    "실제 크기 (Actual Size)": "실제 크기",
    "Actual size": "실제 크기",
    "실제 크기": "실제 크기",
    "Minimize": "최소화",
    "최소화 (Minimize)": "최소화",
    "minimize": "최소화",
    "최소화": "최소화",
    "Maximize": "최대화",
    "최대화 (Maximize)": "최대화",
    "maximize": "최대화",
    "최대화": "최대화",
    "Toggle Full Screen": "전체 화면 전환",
    "전체 화면 전환 (Toggle Full Screen)": "전체 화면 전환",
    "Reload": "새로고침",
    "새로고침 (Reload)": "새로고침",
    "Force Reload": "강제 새로고침",
    "강제 새로고침 (Force Reload)": "강제 새로고침",
    "Docs": "문서",
    "문서 (Docs)": "문서",
    "문서": "문서",
    "Quit Antigravity": "Antigravity 종료",
    "Antigravity 종료 (Quit Antigravity)": "Antigravity 종료",
    "Antigravity 종료": "Antigravity 종료",
    "Go Back": "이전",
    "이전 (Go Back)": "이전",
    "Go back": "이전",
    "이전": "이전",
    "Go Forward": "다음",
    "다음 (Go Forward)": "다음",
    "Go forward": "다음",
    "다음": "다음",
    "Toggle Sidebar": "사이드바",
    "사이드바 (Toggle Sidebar)": "사이드바",
    "Toggle sidebar": "사이드바",
    "Toggle Sidebar (Ctrl+B)": "사이드바",
    "사이드바 (Toggle Sidebar) (Ctrl+B)": "사이드바",
    "Toggle Sidebar (Cmd+B)": "사이드바",
    "사이드바 (Toggle Sidebar) (Cmd+B)": "사이드바",
    "Toggle Sidebar (Ctrl + B)": "사이드바",
    "Toggle Sidebar (Cmd + B)": "사이드바",
    "Collapse sidebar": "사이드바 접기",
    "사이드바 접기 (Collapse Sidebar)": "사이드바 접기",
    "Expand sidebar": "사이드바 펼치기",
    "사이드바 펼치기 (Expand Sidebar)": "사이드바 펼치기",
    "Collapse Sidebar": "사이드바 접기",
    "Expand Sidebar": "사이드바 펼치기",
    "사이드바": "사이드바",
    "사이드바 접기": "사이드바 접기",
    "사이드바 펼치기": "사이드바 펼치기",
    "Command Palette": "명령어모음",
    "명령어모음 (Command Palette)": "명령어모음",
    "Command palette": "명령어모음",
    "Open Command Palette": "명령어모음",
    "Open Command palette": "명령어모음",
    "Open command palette": "명령어모음",
    "Command Palette...": "명령어모음 (Command Palette)...",
    "Open Command Palette...": "명령어모음 (Command Palette)...",
    "Commmand Pallette": "명령어모음",
    "명령어모음": "명령어모음",
    "Commands": "명령어",
    "명령어 (Commands)": "명령어",
    "명령어": "명령어",
    "Files": "파일찾기",
    "파일찾기 (Files)": "파일찾기",
    "File Picker": "파일찾기",
    "파일찾기 (File Picker)": "파일찾기",
    "File picker": "파일찾기",
    "Open File Picker": "파일찾기",
    "Open file picker": "파일찾기",
    "파일찾기": "파일찾기",
    "View Usage": "사용량",
    "사용량 (View Usage)": "사용량",
    "View usage": "사용량",
    "Usage": "사용량",
    "사용량 (Usage)": "사용량",
    "사용량": "사용량",
    "New Conversation": "새 대화",
    "새 대화 (New Conversation)": "새 대화",
    "새 대화": "새 대화",
    "Projects": "프로젝트",
    "프로젝트 (Projects)": "프로젝트",
    "프로젝트": "프로젝트",
    "Not in Project": "프로젝트 외",
    "프로젝트 외 (Not in Project)": "프로젝트 외",
    "Not in project": "프로젝트 외",
    "프로젝트 외": "프로젝트 외",
    "Scheduled Tasks": "예약된 작업",
    "예약된 작업 (Scheduled Tasks)": "예약된 작업",
    "예약된 작업": "예약된 작업",
    "Skills & Customizations": "스킬 및 커스터마이징",
    "스킬 및 커스터마이징 (Skills & Customizations)": "스킬 및 커스터마이징",
    "스킬 및 커스터마이징": "스킬 및 커스터마이징",
    "Settings": "설정",
    "설정 (Settings)": "설정",
    "Open Settings": "설정",
    "설정": "설정",
    "Conversations": "최근대화",
    "최근대화 (Conversations)": "최근대화",
    "Conversation": "대화",
    "대화 (Conversation)": "대화",
    "Other Conversations": "다른 대화",
    "다른 대화 (Other Conversations)": "다른 대화",
    "최근대화": "최근대화",
    "대화": "대화",
    "다른 대화": "다른 대화",
    "Conversation History": "대화 기록",
    "대화 기록 (Conversation History)": "대화 기록",
    "Open Conversation History": "대화 기록",
    "대화 기록": "대화 기록",
    "Open IDE": "IDE 열기",
    "IDE 열기 (Open IDE)": "IDE 열기",
    "Open in IDE": "IDE에서 열기",
    "IDE에서 열기 (Open in IDE)": "IDE에서 열기",
    "IDE 열기": "IDE 열기",
    "IDE에서 열기": "IDE에서 열기",
    "Create Project": "프로젝트 생성",
    "프로젝트 생성 (Create Project)": "프로젝트 생성",
    "Create project": "프로젝트 생성",
    "프로젝트 생성": "프로젝트 생성",
    "Select Folder(s)": "폴더 선택",
    "폴더 선택 (Select Folder(s))": "폴더 선택",
    "Select folder(s)": "폴더 선택",
    "폴더 선택 (Select folder(s))": "폴더 선택",
    "Select Folder": "폴더 선택",
    "폴더 선택 (Select Folder)": "폴더 선택",
    "Select folder": "폴더 선택",
    "폴더 선택 (Select folder)": "폴더 선택",
    "Select Folders": "폴더 선택",
    "폴더 선택 (Select Folders)": "폴더 선택",
    "Select folders": "폴더 선택",
    "폴더 선택 (Select folders)": "폴더 선택",
    "폴더 선택": "폴더 선택",
    "Manage project folders, agent settings, and permissions.": "프로젝트 폴더, 에이전트 설정 및 권한을 관리합니다.",
    "Folders": "폴더",
    "폴더 (Folders)": "폴더",
    "folders": "폴더",
    "Folder": "폴더",
    "폴더 (Folder)": "폴더",
    "folder": "폴더",
    "폴더": "폴더",
    "Add Folder": "폴더 추가",
    "폴더 추가 (Add Folder)": "폴더 추가",
    "Add folder": "폴더 추가",
    "폴더 추가": "폴더 추가",
    "No folders added yet.": "아직 추가된 폴더가 없습니다.",
    "Inherit General": "일반 설정 상속",
    "일반 설정 상속 (Inherit General)": "일반 설정 상속",
    "Local Permissions": "로컬 권한",
    "로컬 권한 (Local Permissions)": "로컬 권한",
    "File Access Rules": "파일 접근 규칙",
    "파일 접근 규칙 (File Access Rules)": "파일 접근 규칙",
    "Configure allowed and denied paths for file reads and writes.": "파일 읽기 및 쓰기에 허용되거나 차단된 경로를 설정합니다.",
    "Terminal Commands": "터미널 명령어",
    "터미널 명령어 (Terminal Commands)": "터미널 명령어",
    "Configure allowed terminal commands.": "허용할 터미널 명령어를 설정합니다.",
    "MCP Tools": "MCP 도구",
    "MCP 도구 (MCP Tools)": "MCP 도구",
    "Configure external tools via Model Context Protocol.": "Model Context Protocol을 통해 외부 도구를 설정합니다.",
    "Also includes": "포함:",
    "global settings": "전역 설정",
    "전역 설정 (Global Settings)": "전역 설정",
    "when working in this project.": "(이 프로젝트에서 작업 시)",
    "Danger Zone": "위험 구역",
    "위험 구역 (Danger Zone)": "위험 구역",
    "위험 구역": "위험 구역",
    "Delete Project": "프로젝트 삭제",
    "프로젝트 삭제 (Delete Project)": "프로젝트 삭제",
    "Delete project": "프로젝트 삭제",
    "프로젝트 삭제": "프로젝트 삭제",
    "삭제 (Delete) Project": "프로젝트 삭제",
    "General": "일반설정",
    "일반설정 (General)": "일반설정",
    "general": "일반설정",
    "Application": "앱설정",
    "앱설정 (Application)": "앱설정",
    "application": "앱설정",
    "앱설정": "앱설정",
    "Appearance": "화면 테마",
    "화면 테마 (Appearance)": "화면 테마",
    "화면 테마": "화면 테마",
    "Theme": "테마",
    "테마 (Theme)": "테마",
    "theme": "테마",
    "테마": "테마",
    "Dark Theme": "어두운 테마",
    "어두운 테마 (Dark Theme)": "어두운 테마",
    "Dark theme": "어두운 테마",
    "어두운 테마": "어두운 테마",
    "Light Theme": "밝은 테마",
    "밝은 테마 (Light Theme)": "밝은 테마",
    "Light theme": "밝은 테마",
    "밝은 테마": "밝은 테마",
    "Chat Setting": "대화창 세팅",
    "대화창 세팅 (Chat Settings)": "대화창 세팅",
    "Chat Settings": "대화창 세팅",
    "chat setting": "대화창 세팅",
    "chat settings": "대화창 세팅",
    "대화창 세팅": "대화창 세팅",
    "Shortcuts": "단축키",
    "단축키 (Shortcuts)": "단축키",
    "Keyboard shortcuts": "단축키",
    "단축키 (Keyboard Shortcuts)": "단축키",
    "Open Keyboard Shortcuts": "단축키",
    "단축키": "단축키",
    "Feedback": "피드백",
    "피드백 (Feedback)": "피드백",
    "Provide Feedback": "피드백",
    "피드백 (Provide Feedback)": "피드백",
    "Provide feedback": "피드백",
    "피드백": "피드백",
    "Account": "계정",
    "계정 (Account)": "계정",
    "account": "계정",
    "계정": "계정",
    "Manage your plan, credentials, and general preferences.": "플랜, 자격 증명 및 일반 환경설정을 관리합니다.",
    "Enable Telemetry": "원격 분석 허용",
    "원격 분석 허용 (Enable Telemetry)": "원격 분석 허용",
    "Marketing Emails": "마케팅 이메일 수신",
    "마케팅 이메일 수신 (Marketing Emails)": "마케팅 이메일 수신",
    "Upgrade": "업그레이드",
    "업그레이드 (Upgrade)": "업그레이드",
    "Email": "이메일",
    "이메일 (Email)": "이메일",
    "Sign Out": "로그아웃",
    "로그아웃 (Sign Out)": "로그아웃",
    "Terms of Service": "서비스 이용약관",
    "서비스 이용약관 (Terms of Service)": "서비스 이용약관",
    "By using this app, you agree to its": "이 앱을 사용하면 다음에 동의하는 것으로 간주됩니다:",
    "Marketplace": "마켓플레이스",
    "마켓플레이스 (Marketplace)": "마켓플레이스",
    "Selection Actions": "선택 액션",
    "선택 액션 (Selection Actions)": "선택 액션",
    "Setup": "설치",
    "설치 (Setup)": "설치",
    "Recommended": "추천",
    "추천 (Recommended)": "추천",
    "Navigation": "탐색",
    "탐색 (Navigation)": "탐색",
    "Layout Controls": "레이아웃 제어",
    "레이아웃 제어 (Layout Controls)": "레이아웃 제어",
    "Editor Settings": "에디터 설정",
    "에디터 설정 (Editor Settings)": "에디터 설정",
    "Configure editor-specific behaviors and shortcuts.": "에디터 관련 동작 및 단축키를 설정합니다.",
    "Show \"Edit\" and \"Chat\" buttons when selecting text in the editor.": "에디터에서 텍스트를 선택할 때 '수정' 및 '대화' 버튼을 표시합니다.",
    "To modify editor settings, open Settings within the editor window.": "에디터 설정을 수정하려면 에디터 창 내에서 설정을 여세요.",
    "Open Editor Settings": "에디터 설정 열기",
    "에디터 설정 열기 (Open Editor Settings)": "에디터 설정 열기",
    "Tab": "탭",
    "탭 (Tab)": "탭",
    "Configure tab completion, suggestions, and navigation behavior.": "탭 자동 완성, 제안 및 탐색 동작을 설정합니다.",
    "Go to General settings": "일반 설정으로 이동",
    "일반 설정으로 이동 (Go to General settings)": "일반 설정으로 이동",
    "Add MCP": "MCP 추가",
    "MCP 추가 (Add MCP)": "MCP 추가",
    "Open MCP Config": "MCP 설정 열기",
    "MCP 설정 열기 (Open MCP Config)": "MCP 설정 열기",
    "Customize": "사용자 지정",
    "사용자 지정 (Customize)": "사용자 지정",
    "Learn more": "자세히 알아보기",
    "자세히 알아보기 (Learn more)": "자세히 알아보기",
    "Marketplace Item URL": "마켓플레이스 항목 URL",
    "마켓플레이스 항목 URL (Marketplace Item URL)": "마켓플레이스 항목 URL",
    "Labs": "실험실",
    "실험실 (Labs)": "실험실",
    "Labs settings have moved": "실험실 설정 위치가 이동되었습니다",
    "Labs settings have moved to the Advanced section of General settings.": "실험실 설정이 일반 설정의 고급 섹션으로 이동되었습니다.",
    "Feedback Type": "피드백 유형",
    "피드백 유형 (Feedback Type)": "피드백 유형",
    "Bug Report": "버그 신고",
    "버그 신고 (Bug Report)": "버그 신고",
    "Feature Request": "기능 요청",
    "기능 요청 (Feature Request)": "기능 요청",
    "Auth and Billing": "인증 및 결제",
    "인증 및 결제 (Auth & Billing)": "인증 및 결제",
    "Remote Control Issue": "리모컨 문제",
    "리모컨 문제 (Remote Control Issue)": "리모컨 문제",
    "General Feedback": "일반 의견",
    "일반 의견 (General Feedback)": "일반 의견",
    "Description": "설명",
    "설명 (Description)": "설명",
    "Steps to reproduce the issue": "문제 재현 절차",
    "Expected behavior": "기대 동작",
    "Actual behavior": "실제 동작",
    "Any error messages": "오류 메시지",
    "Any relevant information": "관련 추가 정보",
    "Steps to Reproduce": "재현 절차",
    "재현 절차 (Steps to Reproduce)": "재현 절차",
    "Attach a screenshot (optional)": "스크린샷 첨부 (선택 사항)",
    "Attach Antigravity server logs": "Antigravity 서버 로그 첨부",
    "Submit": "제출",
    "제출 (Submit)": "제출",
    "Keyboard shortcuts for quick navigation and control.": "빠른 탐색과 제어를 위한 키보드 단축키입니다.",
    "Open Conversation Picker": "대화 선택기 열기",
    "대화 선택기 열기 (Open Conversation Picker)": "대화 선택기 열기",
    "Open File Search": "파일 검색 열기",
    "파일 검색 열기 (Open File Search)": "파일 검색 열기",
    "Focus Input": "입력창으로 포커스 이동",
    "입력창으로 포커스 이동 (Focus Input)": "입력창으로 포커스 이동",
    "Select Previous Conversation": "이전 대화 선택",
    "이전 대화 선택 (Select Previous Conversation)": "이전 대화 선택",
    "Select Next Conversation": "다음 대화 선택",
    "다음 대화 선택 (Select Next Conversation)": "다음 대화 선택",
    "Previous Pane Tab": "이전 창 탭",
    "이전 창 탭 (Previous Pane Tab)": "이전 창 탭",
    "Next Pane Tab": "다음 창 탭",
    "다음 창 탭 (Next Pane Tab)": "다음 창 탭",
    "Toggle Model Selector": "모델 선택창 전환",
    "모델 선택창 전환 (Toggle Model Selector)": "모델 선택창 전환",
    "Toggle Voice Recording": "음성 녹음 시작/중지",
    "음성 녹음 시작/중지 (Toggle Voice Recording)": "음성 녹음 시작/중지",
    "Find in Pane": "창 내 검색",
    "창 내 검색 (Find in Pane)": "창 내 검색",
    "Add to Chat/Quote": "대화에 추가/인용",
    "대화에 추가/인용 (Add to Chat/Quote)": "대화에 추가/인용",
    "Toggle Auxiliary Pane": "보조 창 전환",
    "보조 창 전환 (Toggle Auxiliary Pane)": "보조 창 전환",
    "Toggle Terminal": "터미널 전환",
    "터미널 전환 (Toggle Terminal)": "터미널 전환",
    "Execution": "실행",
    "실행 (Execution)": "실행",
    "실행": "실행",
    "Queued Messages": "대기열 메시지",
    "대기열 메시지 (Queued Messages)": "대기열 메시지",
    "대기열 메시지": "대기열 메시지",
    "Configure when follow-up messages are sent.": "후속 메시지가 전송되는 시점을 설정합니다.",
    "Configure agent execution, queued message delivery, and permissions.": "에이전트 실행, 대기열 메시지 전송 및 권한을 설정합니다.",
    "Queue": "대기열 추가",
    "대기열 추가 (Queue)": "대기열 추가",
    "Send Immediately": "즉시 전송",
    "즉시 전송 (Send Immediately)": "즉시 전송",
    "Agent Settings": "에이전트 설정",
    "에이전트 설정 (Agent Settings)": "에이전트 설정",
    "에이전트 설정": "에이전트 설정",
    "Security Preset": "보안 프리셋",
    "보안 프리셋 (Security Preset)": "보안 프리셋",
    "보안 프리셋": "보안 프리셋",
    "Controls the actions the agent can take.": "에이전트가 수행할 수 있는 작업을 제어합니다.",
    "Learn more about Default": "기본값(Default)에 대해 자세히 알아보기",
    "Default": "기본값",
    "기본값 (Default)": "기본값",
    "기본값": "기본값",
    "Tool Permissions": "도구 권한",
    "도구 권한 (Tool Permissions)": "도구 권한",
    "도구 권한": "도구 권한",
    "Modify permissions for file, terminal, and MCP tools.": "파일, 터미널 및 MCP 도구의 권한을 수정합니다.",
    "Agent Behavior": "에이전트 동작",
    "에이전트 동작 (Agent Behavior)": "에이전트 동작",
    "에이전트 동작": "에이전트 동작",
    "Artifact Review Policy": "아티팩트 검토 정책",
    "아티팩트 검토 정책 (Artifact Review Policy)": "아티팩트 검토 정책",
    "아티팩트 검토 정책": "아티팩트 검토 정책",
    "Whether the agent asks you to review its documents.": "에이전트가 문서 검토를 요청할지 여부를 설정합니다.",
    "Always Ask": "항상 묻기",
    "항상 묻기 (Always Ask)": "항상 묻기",
    "항상 묻기": "항상 묻기",
    "Network Permissions": "네트워크 권한",
    "네트워크 권한 (Network Permissions)": "네트워크 권한",
    "네트워크 권한": "네트워크 권한",
    "Network Access Rules": "네트워크 접근 규칙",
    "네트워크 접근 규칙 (Network Access Rules)": "네트워크 접근 규칙",
    "네트워크 접근 규칙": "네트워크 접근 규칙",
    "Configure allowed and denied URLs for reading.": "읽기를 허용하거나 차단할 URL을 설정합니다.",
    "Terminal & Tooling Permissions": "터미널 및 도구 권한",
    "터미널 및 도구 권한 (Terminal & Tooling Permissions)": "터미널 및 도구 권한",
    "터미널 및 도구 권한": "터미널 및 도구 권한",
    "Commands Outside Sandbox": "샌드박스 외부 명령어",
    "샌드박스 외부 명령어 (Commands Outside Sandbox)": "샌드박스 외부 명령어",
    "샌드박스 외부 명령어": "샌드박스 외부 명령어",
    "Configure allowed commands outside the sandbox.": "샌드박스 외부에서 허용할 명령어를 설정합니다.",
    "Browser": "브라우저",
    "브라우저 (Browser)": "브라우저",
    "브라우저": "브라우저",
    "Configure the browser subagent. It requires Google Chrome to be installed. The browser subagent can be invoked by typing /browser in the conversation input box.": "브라우저 서브에이전트를 설정합니다. Google Chrome이 설치되어 있어야 합니다. 대화 입력창에 /browser를 입력하여 브라우저 서브에이전트를 실행할 수 있습니다.",
    "Browser Javascript Execution Policy": "브라우저 자바스크립트 실행 정책",
    "브라우저 자바스크립트 실행 정책 (Browser JS Execution Policy)": "브라우저 자바스크립트 실행 정책",
    "브라우저 자바스크립트 실행 정책": "브라우저 자바스크립트 실행 정책",
    "Controls whether the agent can run custom JavaScript to automate complex browser actions.": "복잡한 브라우저 작업을 자동화하기 위해 에이전트가 사용자 지정 자바스크립트를 실행할 수 있는지 제어합니다.",
    "Request Review": "검토 요청",
    "검토 요청 (Request Review)": "검토 요청",
    "검토 요청": "검토 요청",
    "Browser Actuation Rules": "브라우저 제어 규칙",
    "브라우저 제어 규칙 (Browser Actuation Rules)": "브라우저 제어 규칙",
    "브라우저 제어 규칙": "브라우저 제어 규칙",
    "Configure allowed and denied URLs for browser actuation.": "브라우저 제어를 허용하거나 차단할 URL을 설정합니다.",
    "Browser Settings": "브라우저 설정",
    "브라우저 설정 (Browser Settings)": "브라우저 설정",
    "브라우저 설정": "브라우저 설정",
    "Browser settings have moved": "브라우저 설정 위치가 이동되었습니다",
    "Browser settings have moved to the Browser section of General settings.": "브라우저 설정이 일반 설정의 브라우저 섹션으로 이동되었습니다.",
    "Terminal Sandbox": "터미널 샌드박스",
    "터미널 샌드박스 (Terminal Sandbox)": "터미널 샌드박스",
    "Non-Workspace File Access": "외부 파일 접근 권한",
    "외부 파일 접근 권한 (Non-Workspace File Access)": "외부 파일 접근 권한",
    "Internet Access Policy": "인터넷 접근 정책",
    "인터넷 접근 정책 (Internet Access Policy)": "인터넷 접근 정책",
    "Permission Grants": "권한 부여 설정",
    "권한 부여 설정 (Permission Grants)": "권한 부여 설정",
    "Command Allowlist": "명령어 허용 목록",
    "명령어 허용 목록 (Command Allowlist)": "명령어 허용 목록",
    "Command Denylist": "명령어 차단 목록",
    "명령어 차단 목록 (Command Denylist)": "명령어 차단 목록",
    "Browser Allowlist": "브라우저 허용 목록",
    "브라우저 허용 목록 (Browser Allowlist)": "브라우저 허용 목록",
    "Artifact Review Mode": "아티팩트 검토 모드",
    "아티팩트 검토 모드 (Artifact Review Mode)": "아티팩트 검토 모드",
    "Allow": "허용",
    "허용 (Allow)": "허용",
    "Ask": "항상 묻기",
    "항상 묻기 (Ask)": "항상 묻기",
    "Deny": "차단",
    "차단 (Deny)": "차단",
    "Always-proceed": "항상 진행",
    "항상 진행 (Always-proceed)": "항상 진행",
    "Request-review": "검토 요청",
    "검토 요청 (Request-review)": "검토 요청",
    "Strict": "엄격 모드",
    "엄격 모드 (Strict)": "엄격 모드",
    "Manage Antigravity app settings.": "Antigravity 앱 설정을 관리합니다.",
    "Remote Control": "리모컨",
    "리모컨 (Remote Control)": "리모컨",
    "Remote control": "리모컨",
    "리모컨": "리모컨",
    "Enable Remote Control": "리모컨 활성화",
    "리모컨 활성화 (Enable Remote Control)": "리모컨 활성화",
    "리모컨 활성화": "리모컨 활성화",
    "Work with local agents from another device.": "다른 기기에서 로컬 에이전트와 연결하여 작업합니다.",
    "Version": "버전",
    "버전 (Version)": "버전",
    "version": "버전",
    "버전": "버전",
    "버젼": "버전",
    "App version": "앱 버전",
    "앱 버전 (App Version)": "앱 버전",
    "앱 버젼": "앱 버전",
    "앱 버전": "앱 버전",
    "Prevent Sleep": "절전 모드 방지",
    "절전 모드 방지 (Prevent Sleep)": "절전 모드 방지",
    "절전 모드 방지": "절전 모드 방지",
    "Prevent the computer from sleeping while the app is running.": "앱이 실행 중일 때 컴퓨터가 절전 모드로 들어가지 않도록 방지합니다.",
    "Keep In Menu Bar": "메뉴 표시줄에 유지",
    "메뉴 표시줄에 유지 (Keep in Menu Bar)": "메뉴 표시줄에 유지",
    "Keep in Menu Bar": "메뉴 표시줄에 유지",
    "메뉴 표시줄에 유지": "메뉴 표시줄에 유지",
    "메뉴 표시줄(트레이)에 유지": "메뉴 표시줄에 유지",
    "Keep the app accessible from the menu bar and running in the background when all windows are closed.": "모든 창이 닫혀도 메뉴 표시줄에서 앱에 접근할 수 있도록 백그라운드에서 계속 실행합니다.",
    "Notification Settings": "알림 설정",
    "알림 설정 (Notification Settings)": "알림 설정",
    "알림 설정": "알림 설정",
    "Notifications": "알림",
    "알림 (Notifications)": "알림",
    "알림": "알림",
    "To modify notification settings, open your operating system's system preferences.": "알림 설정을 변경하려면 운영체제의 시스템 환경설정을 여세요.",
    "Open System Preferences": "시스템 환경설정 열기",
    "시스템 환경설정 열기 (System Preferences)": "시스템 환경설정 열기",
    "Advanced Settings": "고급 설정",
    "고급 설정 (Advanced Settings)": "고급 설정",
    "고급 설정": "고급 설정",
    "Automatic Check for Updates": "업데이트 자동 확인",
    "업데이트 자동 확인 (Automatic Check for Updates)": "업데이트 자동 확인",
    "업데이트 자동 확인": "업데이트 자동 확인",
    "Auto-check for updates": "업데이트 자동 확인",
    "업데이트 자동 확인 (Auto-check for updates)": "업데이트 자동 확인",
    "Check for updates": "업데이트 확인",
    "업데이트 확인 (Check for Updates)": "업데이트 확인",
    "Check for Updates": "업데이트 확인",
    "업데이트 확인": "업데이트 확인",
    "Automatically prompt you to restart the app when a new update is available. When disabled, you can check for updates manually from the app menu.": "새 업데이트가 있으면 앱을 재시작하라는 알림을 자동으로 표시합니다. 비활성화하면 앱 메뉴에서 수동으로 업데이트를 확인할 수 있습니다.",
    "Configure the agent's visual theme and display preferences.": "에이전트의 시각적 테마와 디스플레이 환경설정을 지정합니다.",
    "Verbose Agent Chat": "상세 에이전트 대화",
    "상세 에이전트 대화 (Verbose Agent Chat)": "상세 에이전트 대화",
    "상세 에이전트 대화 (Verbose)": "상세 에이전트 대화",
    "Display and preserve intermediate thinking steps.": "중간 추론 및 생각 과정을 화면에 표시하고 유지합니다.",
    "Conversation Width": "대화창 너비",
    "대화창 너비 (Conversation Width)": "대화창 너비",
    "대화창 너비": "대화창 너비",
    "Configure the maximum width of the conversation panel.": "대화창 패널의 최대 너비를 설정합니다.",
    "Narrow": "좁게",
    "좁게 (Narrow)": "좁게",
    "Wide": "넓게",
    "넓게 (Wide)": "넓게",
    "Preset": "프리셋",
    "프리셋 (Preset)": "프리셋",
    "프리셋": "프리셋",
    "Default Dark": "기본 어두운 테마",
    "기본 어두운 테마 (Default Dark)": "기본 어두운 테마",
    "기본 어두운 테마": "기본 어두운 테마",
    "Default Light": "기본 밝은 테마",
    "기본 밝은 테마 (Default Light)": "기본 밝은 테마",
    "기본 밝은 테마": "기본 밝은 테마",
    "Background": "배경색",
    "배경색 (Background)": "배경색",
    "배경색": "배경색",
    "Foreground": "전경색",
    "전경색 (Foreground)": "전경색",
    "전경색(글자색)": "전경색",
    "Accent": "강조색",
    "강조색 (Accent)": "강조색",
    "강조색(액센트)": "강조색",
    "Dark": "다크 모드",
    "다크 모드 (Dark)": "다크 모드",
    "다크 모드": "다크 모드",
    "Light": "라이트 모드",
    "라이트 모드 (Light)": "라이트 모드",
    "라이트 모드": "라이트 모드",
    "System": "시스템 설정 따름",
    "시스템 설정 따름 (System)": "시스템 설정 따름",
    "시스템 설정 따름": "시스템 설정 따름",
    "Model & Usage": "모델 및 한도",
    "모델 및 한도 (Model & Usage)": "모델 및 한도",
    "Models & Usage": "모델 및 한도",
    "모델 및 한도 (Models & Usage)": "모델 및 한도",
    "Model and Usage": "모델 및 한도",
    "Models and Usage": "모델 및 한도",
    "모델 및 한도": "모델 및 한도",
    "Models": "모델",
    "모델 (Models)": "모델",
    "Model": "모델",
    "모델 (Model)": "모델",
    "모델": "모델",
    "Manage your model quota and credits.": "모델 할당량과 크레딧을 관리합니다.",
    "Plan": "플랜",
    "플랜 (Plan)": "플랜",
    "plan": "플랜",
    "플랜": "플랜",
    "You can upgrade to a Google AI Ultra plan to receive higher rate limits.": "더 높은 사용 한도를 이용하려면 Google AI Ultra 플랜으로 업그레이드할 수 있습니다.",
    "Model Credits": "크레딧사용여부",
    "크레딧사용여부 (Model Credits)": "크레딧사용여부",
    "Model credits": "크레딧사용여부",
    "크레딧사용여부": "크레딧사용여부",
    "Enable AI Credit Overages": "AI 크레딧 초과 사용 허용",
    "AI 크레딧 초과 사용 허용 (Enable AI Credit Overages)": "AI 크레딧 초과 사용 허용",
    "AI 크레딧 초과 사용 허용": "AI 크레딧 초과 사용 허용",
    "When toggled on, Antigravity will use your AI credits to fulfill model requests once you're out of model quota. Antigravity will always use your model quota first before using AI credits.": "활성화하면 모델 할당량이 소진되었을 때 AI 크레딧을 사용하여 모델 요청을 처리합니다. Antigravity는 항상 AI 크레딧을 사용하기 전에 모델 할당량을 먼저 사용합니다.",
    "Gemini Models": "Gemini 모델",
    "Gemini 모델 (Gemini Models)": "Gemini 모델",
    "Gemini 모델": "Gemini 모델",
    "Claude and GPT models": "Claude 및 GPT 모델",
    "Claude 및 GPT 모델 (Claude & GPT Models)": "Claude 및 GPT 모델",
    "Claude 및 GPT 모델": "Claude 및 GPT 모델",
    "Weekly Limit Remaining": "주간 남은 한도",
    "주간 남은 한도 (Weekly Limit)": "주간 남은 한도",
    "주간 남은 한도": "주간 남은 한도",
    "Five Hour Limit Remaining": "5시간 남은 한도",
    "5시간 남은 한도 (5-Hour Limit)": "5시간 남은 한도",
    "5시간 남은 한도": "5시간 남은 한도",
    "Quota": "할당량",
    "할당량 (Quota)": "할당량",
    "할당량": "할당량",
    "Customizations": "커스터마이징",
    "커스터마이징 (Customizations)": "커스터마이징",
    "Customization": "커스터마이징",
    "커스터마이징 (Customization)": "커스터마이징",
    "커스터마이징": "커스터마이징",
    "Configure default behaviors, skills, and MCP servers. Learn more.": "기본 동작, 스킬 및 MCP 서버를 설정합니다. 자세히 알아보기.",
    "Configure default behaviors, skills, and MCP servers.": "기본 동작, 스킬 및 MCP 서버를 설정합니다.",
    "Token Usage": "토큰 사용량",
    "토큰 사용량 (Token Usage)": "토큰 사용량",
    "토큰 사용량": "토큰 사용량",
    "The breakdown below shows token usage from customizations like skills, rules, and MCP. If the budget is exceeded, large customizations will be truncated automatically.": "아래 내역은 스킬, 규칙, MCP와 같은 커스터마이징의 토큰 사용량을 보여줍니다. 한도를 초과하면 용량이 큰 커스터마이징은 자동으로 잘립니다.",
    "Rules": "규칙",
    "규칙 (Rules)": "규칙",
    "규칙": "규칙",
    "Skills": "스킬",
    "스킬 (Skills)": "스킬",
    "스킬": "스킬",
    "Global": "전역",
    "전역 (Global)": "전역",
    "전역": "전역",
    "Installed MCP Servers": "설치된 MCP 서버",
    "설치된 MCP 서버 (Installed MCP Servers)": "설치된 MCP 서버",
    "설치된 MCP 서버": "설치된 MCP 서버",
    "Authenticate": "인증하기",
    "인증하기 (Authenticate)": "인증하기",
    "Plugins": "플러그인",
    "플러그인 (Plugins)": "플러그인",
    "플러그인": "플러그인",
    "Build With Google Plugins": "Build With Google 플러그인",
    "Build With Google 플러그인 (Build With Google Plugins)": "Build With Google 플러그인",
    "Browse and enable plugins from the Build With Google catalog.": "Build With Google 카탈로그에서 플러그인을 둘러보고 활성화하세요.",
    "Comprehensive guide and reference for the Antigravity Customization System. Use to explain how customizations work, their loading priority, discovery mechanisms, and to guide the creation of skills, rules, plugins, hooks, and MCP servers.": "Antigravity 커스터마이징 시스템에 대한 종합 안내 및 참조 문서입니다. 커스터마이징 동작 방식, 로딩 우선순위, 탐색 메커니즘을 설명하고 스킬, 규칙, 플러그인, 훅, MCP 서버 생성을 안내합니다.",
    "Provides a comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), including the Antigravity CLI (agy), Antigravity 2.0, Antigravity IDE, Python SDK, slash commands, keybindings, and customizations (skills, rules, MCP, sidecars). Activate this skill when the user asks questions about how to use, configure, or customize Antigravity, AGY, the agy CLI, the Antigravity IDE, or Antigravity 2.0.": "Google Antigravity(AGY)의 CLI(agy), 2.0, IDE, Python SDK, 슬래시 명령어, 단축키 및 커스터마이징에 대한 종합 가이드와 빠른 참조를 제공합니다.",
    "Create stunning, animation-rich HTML presentations from scratch or by converting PowerPoint files. Use when the user wants to build a presentation, convert a PPT/PPTX to web, or create slides for a talk/pitch. Helps non-designers discover their aesthetic through visual exploration rather than abstract choices.": "처음부터 만들거나 파워포인트 파일을 변환하여 멋진 애니메이션 효과가 들어간 HTML 프레젠테이션을 생성합니다.",
    "How to render rich interactive HTML widgets inline in the chat or as standalone artifacts. Use this skill when you want to show the user diagrams, data visualizations, interactive controls, educational walkthroughs, or any rich visual content beyond plain text and markdown.": "채팅창 내부 인라인 또는 독립형 아티팩트로 인터랙티브 HTML 위젯을 렌더링하는 방법을 안내합니다.",
    "Automatically migrate legacy workflows to modern skills across global and workspace configurations. Scans for existing workflows, creates target SKILL.md files, and safely archives old workflow files.": "기존 레거시 워크플로를 전역 및 워크스페이스 구성에 걸쳐 최신 스킬 형태로 자동 이전합니다.",
    "Guidelines for interacting with GitHub and request permissions from the user when commands fail due to restrictions in the agent environment.": "GitHub와의 상호작용 지침 및 에이전트 환경 제약으로 명령이 실패할 때 사용자에게 권한을 요청하는 가이드입니다.",
    "Active Agent": "활성 에이전트",
    "활성 에이전트 (Active Agent)": "활성 에이전트",
    "활성 에이전트": "활성 에이전트",
    "Idle": "대기 중",
    "대기 중 (Idle)": "대기 중",
    "대기 중": "대기 중",
    "Subagents": "서브에이전트",
    "서브에이전트 (Subagents)": "서브에이전트",
    "서브에이전트": "서브에이전트",
    "Background Tasks": "백그라운드 작업",
    "백그라운드 작업 (Background Tasks)": "백그라운드 작업",
    "백그라운드 작업": "백그라운드 작업",
    "Artifacts": "아티팩트",
    "아티팩트 (Artifacts)": "아티팩트",
    "아티팩트": "아티팩트",
    "Files Changed": "변경된 파일",
    "변경된 파일 (Files Changed)": "변경된 파일",
    "변경된 파일": "변경된 파일",
    "Terminal": "터미널",
    "터미널 (Terminal)": "터미널",
    "터미널": "터미널",
    "Terminals": "터미널",
    "터미널 (Terminals)": "터미널",
    "No running tasks": "실행 중인 작업이 없습니다",
    "No active subagents": "활성 서브에이전트가 없습니다",
    "No artifacts yet": "아직 생성된 아티팩트가 없습니다",
    "No changed files": "변경된 파일이 없습니다",
    "No conversations yet": "대화 기록이 없습니다",
    "Planning Mode": "기획 모드",
    "기획 모드 (Planning Mode)": "기획 모드",
    "기획 모드": "기획 모드",
    "Fast Mode": "빠른 모드",
    "빠른 모드 (Fast Mode)": "빠른 모드",
    "빠른 모드": "빠른 모드",
    "Agent Mode": "에이전트 모드",
    "에이전트 모드 (Agent Mode)": "에이전트 모드",
    "에이전트 모드": "에이전트 모드",
    "Review": "검토",
    "검토 (Review)": "검토",
    "검토": "검토",
    "Changes": "변경 사항",
    "변경 사항 (Changes)": "변경 사항",
    "변경 사항": "변경 사항",
    "Diff": "차이점",
    "차이점 (Diff)": "차이점",
    "차이점": "차이점",
    "Send": "전송",
    "전송 (Send)": "전송",
    "전송": "전송",
    "Proceed": "진행",
    "진행 (Proceed)": "진행",
    "진행": "진행",
    "Approve": "승인",
    "승인 (Approve)": "승인",
    "승인": "승인",
    "Reject": "거절",
    "거절 (Reject)": "거절",
    "거절": "거절",
    "Always Proceed": "항상 진행",
    "항상 진행 (Always Proceed)": "항상 진행",
    "항상 진행": "항상 진행",
    "Ask for Review": "검토 요청",
    "검토 요청 (Ask for Review)": "검토 요청",
    "Review Changes": "변경 사항 검토",
    "변경 사항 검토 (Review Changes)": "변경 사항 검토",
    "Cancel": "취소",
    "취소 (Cancel)": "취소",
    "취소": "취소",
    "Close": "닫기",
    "닫기 (Close)": "닫기",
    "닫기": "닫기",
    "Open": "열기",
    "열기 (Open)": "열기",
    "Save": "저장",
    "저장 (Save)": "저장",
    "저장": "저장",
    "Delete": "삭제",
    "삭제 (Delete)": "삭제",
    "삭제": "삭제",
    "수정": "수정",
    "Retry": "재시도",
    "재시도 (Retry)": "재시도",
    "재시도": "재시도",
    "Clear": "초기화",
    "초기화 (Clear)": "초기화",
    "초기화": "초기화",
    "Copy": "복사",
    "복사 (Copy)": "복사",
    "복사": "복사",
    "Copied": "복사됨",
    "복사됨 (Copied)": "복사됨",
    "복사됨": "복사됨",
    "Copied!": "복사 완료!",
    "복사 완료!": "복사 완료! (Copied!)",
    "Thinking...": "생각하는 중...",
    "생각하는 중... (Thinking...)": "생각하는 중...",
    "Working...": "작업 수행 중...",
    "작업 수행 중... (Working...)": "작업 수행 중...",
    "Generating...": "생성 중...",
    "생성 중... (Generating...)": "생성 중...",
    "Searching...": "검색 중...",
    "검색 중... (Searching...)": "검색 중...",
    "Reading...": "읽는 중...",
    "읽는 중... (Reading...)": "읽는 중...",
    "Running...": "실행 중...",
    "실행 중... (Running...)": "실행 중...",
    "창크기 (Window)": "윈도우",
    "윈도우": "윈도우",
    "일반 (General)": "일반"
};
  const BILINGUAL_EXACT = {
    "File": "파일 (File)",
    "파일": "파일 (File)",
    "Edit": "수정 (Edit)",
    "편집": "편집 (Edit)",
    "View": "보기 (View)",
    "보기": "보기 (View)",
    "Window": "윈도우 (Window)",
    "창크기": "윈도우 (Window)",
    "Help": "도움말 (Help)",
    "도움말": "도움말 (Help)",
    "New Window": "새 창 (New Window)",
    "새 창": "새 창 (New Window)",
    "Zoom In": "확대 (Zoom In)",
    "Zoom in": "확대 (Zoom In)",
    "확대": "확대 (Zoom In)",
    "Zoom Out": "축소 (Zoom Out)",
    "Zoom out": "축소 (Zoom Out)",
    "축소": "축소 (Zoom Out)",
    "Reset Zoom": "원래 크기로 (Reset Zoom)",
    "Reset zoom": "원래 크기로 (Reset Zoom)",
    "원래 크기로": "원래 크기로 (Reset Zoom)",
    "Actual Size": "실제 크기 (Actual Size)",
    "Actual size": "실제 크기 (Actual Size)",
    "실제 크기": "실제 크기 (Actual Size)",
    "Minimize": "최소화 (Minimize)",
    "minimize": "최소화 (Minimize)",
    "최소화": "최소화 (Minimize)",
    "Maximize": "최대화 (Maximize)",
    "maximize": "최대화 (Maximize)",
    "최대화": "최대화 (Maximize)",
    "Toggle Full Screen": "전체 화면 전환 (Toggle Full Screen)",
    "Reload": "새로고침 (Reload)",
    "Force Reload": "강제 새로고침 (Force Reload)",
    "Docs": "문서 (Docs)",
    "문서": "문서 (Docs)",
    "Quit Antigravity": "Antigravity 종료 (Quit Antigravity)",
    "Antigravity 종료": "Antigravity 종료 (Quit Antigravity)",
    "Go Back": "이전 (Go Back)",
    "Go back": "이전 (Go Back)",
    "이전": "이전 (Go Back)",
    "Go Forward": "다음 (Go Forward)",
    "Go forward": "다음 (Go Forward)",
    "다음": "다음 (Go Forward)",
    "Toggle Sidebar": "사이드바 (Toggle Sidebar)",
    "Toggle sidebar": "사이드바 (Toggle Sidebar)",
    "Toggle Sidebar (Ctrl+B)": "사이드바 (Toggle Sidebar) (Ctrl+B)",
    "Toggle Sidebar (Cmd+B)": "사이드바 (Toggle Sidebar) (Cmd+B)",
    "Toggle Sidebar (Ctrl + B)": "사이드바 (Toggle Sidebar) (Ctrl+B)",
    "Toggle Sidebar (Cmd + B)": "사이드바 (Toggle Sidebar) (Cmd+B)",
    "Collapse sidebar": "사이드바 접기 (Collapse Sidebar)",
    "Expand sidebar": "사이드바 펼치기 (Expand Sidebar)",
    "Collapse Sidebar": "사이드바 접기 (Collapse Sidebar)",
    "Expand Sidebar": "사이드바 펼치기 (Expand Sidebar)",
    "사이드바": "사이드바 (Toggle Sidebar)",
    "사이드바 접기": "사이드바 접기 (Collapse Sidebar)",
    "사이드바 펼치기": "사이드바 펼치기 (Expand Sidebar)",
    "Command Palette": "명령어모음 (Command Palette)",
    "Command palette": "명령어모음 (Command Palette)",
    "Open Command Palette": "명령어모음 (Command Palette)",
    "Open Command palette": "명령어모음 (Command Palette)",
    "Open command palette": "명령어모음 (Command Palette)",
    "Command Palette...": "명령어모음 (Command Palette)...",
    "Open Command Palette...": "명령어모음 (Command Palette)...",
    "Commmand Pallette": "명령어모음 (Command Palette)",
    "명령어모음": "명령어모음 (Command Palette)",
    "Commands": "명령어 (Commands)",
    "명령어": "명령어 (Commands)",
    "Files": "파일찾기 (Files)",
    "File Picker": "파일찾기 (File Picker)",
    "File picker": "파일찾기 (File Picker)",
    "Open File Picker": "파일찾기 (File Picker)",
    "Open file picker": "파일찾기 (File Picker)",
    "파일찾기": "파일찾기 (Files)",
    "View Usage": "사용량 (View Usage)",
    "View usage": "사용량 (View Usage)",
    "Usage": "사용량 (Usage)",
    "사용량": "사용량 (View Usage)",
    "New Conversation": "새 대화 (New Conversation)",
    "새 대화": "새 대화 (New Conversation)",
    "Projects": "프로젝트 (Projects)",
    "프로젝트": "프로젝트 (Projects)",
    "Not in Project": "프로젝트 외 (Not in Project)",
    "Not in project": "프로젝트 외 (Not in Project)",
    "프로젝트 외": "프로젝트 외 (Not in Project)",
    "Scheduled Tasks": "예약된 작업 (Scheduled Tasks)",
    "예약된 작업": "예약된 작업 (Scheduled Tasks)",
    "Skills & Customizations": "스킬 및 커스터마이징 (Skills & Customizations)",
    "스킬 및 커스터마이징": "스킬 및 커스터마이징 (Skills & Customizations)",
    "Settings": "설정 (Settings)",
    "Open Settings": "설정 (Settings)",
    "설정": "설정 (Settings)",
    "Conversations": "최근대화 (Conversations)",
    "Conversation": "대화 (Conversation)",
    "Other Conversations": "다른 대화 (Other Conversations)",
    "최근대화": "최근대화 (Conversations)",
    "대화": "대화 (Conversation)",
    "다른 대화": "다른 대화 (Other Conversations)",
    "Conversation History": "대화 기록 (Conversation History)",
    "Open Conversation History": "대화 기록 (Conversation History)",
    "대화 기록": "대화 기록 (Conversation History)",
    "Open IDE": "IDE 열기 (Open IDE)",
    "Open in IDE": "IDE에서 열기 (Open in IDE)",
    "IDE 열기": "IDE 열기 (Open IDE)",
    "IDE에서 열기": "IDE에서 열기 (Open in IDE)",
    "Create Project": "프로젝트 생성 (Create Project)",
    "Create project": "프로젝트 생성 (Create Project)",
    "프로젝트 생성": "프로젝트 생성 (Create Project)",
    "Select Folder(s)": "폴더 선택 (Select Folder(s))",
    "Select folder(s)": "폴더 선택 (Select folder(s))",
    "Select Folder": "폴더 선택 (Select Folder)",
    "Select folder": "폴더 선택 (Select folder)",
    "Select Folders": "폴더 선택 (Select Folders)",
    "Select folders": "폴더 선택 (Select folders)",
    "폴더 선택": "폴더 선택 (Select Folder)",
    "Manage project folders, agent settings, and permissions.": "프로젝트 폴더, 에이전트 설정 및 권한을 관리합니다.",
    "Folders": "폴더 (Folders)",
    "folders": "폴더 (Folders)",
    "Folder": "폴더 (Folder)",
    "folder": "폴더 (Folder)",
    "폴더": "폴더 (Folders)",
    "Add Folder": "폴더 추가 (Add Folder)",
    "Add folder": "폴더 추가 (Add Folder)",
    "폴더 추가": "폴더 추가 (Add Folder)",
    "No folders added yet.": "아직 추가된 폴더가 없습니다.",
    "Inherit General": "일반 설정 상속 (Inherit General)",
    "Local Permissions": "로컬 권한 (Local Permissions)",
    "File Access Rules": "파일 접근 규칙 (File Access Rules)",
    "Configure allowed and denied paths for file reads and writes.": "파일 읽기 및 쓰기에 허용되거나 차단된 경로를 설정합니다.",
    "Terminal Commands": "터미널 명령어 (Terminal Commands)",
    "Configure allowed terminal commands.": "허용할 터미널 명령어를 설정합니다.",
    "MCP Tools": "MCP 도구 (MCP Tools)",
    "Configure external tools via Model Context Protocol.": "Model Context Protocol을 통해 외부 도구를 설정합니다.",
    "Also includes": "포함:",
    "global settings": "전역 설정 (Global Settings)",
    "when working in this project.": "(이 프로젝트에서 작업 시)",
    "Danger Zone": "위험 구역 (Danger Zone)",
    "위험 구역": "위험 구역 (Danger Zone)",
    "Delete Project": "프로젝트 삭제 (Delete Project)",
    "Delete project": "프로젝트 삭제 (Delete Project)",
    "프로젝트 삭제": "프로젝트 삭제 (Delete Project)",
    "삭제 (Delete) Project": "프로젝트 삭제 (Delete Project)",
    "General": "일반설정 (General)",
    "general": "일반설정 (General)",
    "Application": "앱설정 (Application)",
    "application": "앱설정 (Application)",
    "앱설정": "앱설정 (Application)",
    "Appearance": "화면 테마 (Appearance)",
    "화면 테마": "화면 테마 (Appearance)",
    "Theme": "테마 (Theme)",
    "theme": "테마 (Theme)",
    "테마": "테마 (Theme)",
    "Dark Theme": "어두운 테마 (Dark Theme)",
    "Dark theme": "어두운 테마 (Dark Theme)",
    "어두운 테마": "어두운 테마 (Dark Theme)",
    "Light Theme": "밝은 테마 (Light Theme)",
    "Light theme": "밝은 테마 (Light Theme)",
    "밝은 테마": "밝은 테마 (Light Theme)",
    "Chat Setting": "대화창 세팅 (Chat Settings)",
    "Chat Settings": "대화창 세팅 (Chat Settings)",
    "chat setting": "대화창 세팅 (Chat Settings)",
    "chat settings": "대화창 세팅 (Chat Settings)",
    "대화창 세팅": "대화창 세팅 (Chat Settings)",
    "Shortcuts": "단축키 (Shortcuts)",
    "Keyboard shortcuts": "단축키 (Keyboard Shortcuts)",
    "Open Keyboard Shortcuts": "단축키 (Shortcuts)",
    "단축키": "단축키 (Shortcuts)",
    "Feedback": "피드백 (Feedback)",
    "Provide Feedback": "피드백 (Provide Feedback)",
    "Provide feedback": "피드백 (Provide Feedback)",
    "피드백": "피드백 (Feedback)",
    "Account": "계정 (Account)",
    "account": "계정 (Account)",
    "계정": "계정 (Account)",
    "Manage your plan, credentials, and general preferences.": "플랜, 자격 증명 및 일반 환경설정을 관리합니다.",
    "Enable Telemetry": "원격 분석 허용 (Enable Telemetry)",
    "Marketing Emails": "마케팅 이메일 수신 (Marketing Emails)",
    "Upgrade": "업그레이드 (Upgrade)",
    "Email": "이메일 (Email)",
    "Sign Out": "로그아웃 (Sign Out)",
    "Terms of Service": "서비스 이용약관 (Terms of Service)",
    "By using this app, you agree to its": "이 앱을 사용하면 다음에 동의하는 것으로 간주됩니다:",
    "Marketplace": "마켓플레이스 (Marketplace)",
    "Selection Actions": "선택 액션 (Selection Actions)",
    "Setup": "설치 (Setup)",
    "Recommended": "추천 (Recommended)",
    "Navigation": "탐색 (Navigation)",
    "Layout Controls": "레이아웃 제어 (Layout Controls)",
    "Editor Settings": "에디터 설정 (Editor Settings)",
    "Configure editor-specific behaviors and shortcuts.": "에디터 관련 동작 및 단축키를 설정합니다.",
    "Show \"Edit\" and \"Chat\" buttons when selecting text in the editor.": "에디터에서 텍스트를 선택할 때 '수정' 및 '대화' 버튼을 표시합니다.",
    "To modify editor settings, open Settings within the editor window.": "에디터 설정을 수정하려면 에디터 창 내에서 설정을 여세요.",
    "Open Editor Settings": "에디터 설정 열기 (Open Editor Settings)",
    "Tab": "탭 (Tab)",
    "Configure tab completion, suggestions, and navigation behavior.": "탭 자동 완성, 제안 및 탐색 동작을 설정합니다.",
    "Go to General settings": "일반 설정으로 이동 (Go to General settings)",
    "Add MCP": "MCP 추가 (Add MCP)",
    "Open MCP Config": "MCP 설정 열기 (Open MCP Config)",
    "Customize": "사용자 지정 (Customize)",
    "Learn more": "자세히 알아보기 (Learn more)",
    "Marketplace Item URL": "마켓플레이스 항목 URL (Marketplace Item URL)",
    "Labs": "실험실 (Labs)",
    "Labs settings have moved": "실험실 설정 위치가 이동되었습니다",
    "Labs settings have moved to the Advanced section of General settings.": "실험실 설정이 일반 설정의 고급 섹션으로 이동되었습니다.",
    "Feedback Type": "피드백 유형 (Feedback Type)",
    "Bug Report": "버그 신고 (Bug Report)",
    "Feature Request": "기능 요청 (Feature Request)",
    "Auth and Billing": "인증 및 결제 (Auth & Billing)",
    "Remote Control Issue": "리모컨 문제 (Remote Control Issue)",
    "General Feedback": "일반 의견 (General Feedback)",
    "Description": "설명 (Description)",
    "Steps to reproduce the issue": "문제 재현 절차",
    "Expected behavior": "기대 동작",
    "Actual behavior": "실제 동작",
    "Any error messages": "오류 메시지",
    "Any relevant information": "관련 추가 정보",
    "Steps to Reproduce": "재현 절차 (Steps to Reproduce)",
    "Attach a screenshot (optional)": "스크린샷 첨부 (선택 사항)",
    "Attach Antigravity server logs": "Antigravity 서버 로그 첨부",
    "Submit": "제출 (Submit)",
    "Keyboard shortcuts for quick navigation and control.": "빠른 탐색과 제어를 위한 키보드 단축키입니다.",
    "Open Conversation Picker": "대화 선택기 열기 (Open Conversation Picker)",
    "Open File Search": "파일 검색 열기 (Open File Search)",
    "Focus Input": "입력창으로 포커스 이동 (Focus Input)",
    "Select Previous Conversation": "이전 대화 선택 (Select Previous Conversation)",
    "Select Next Conversation": "다음 대화 선택 (Select Next Conversation)",
    "Previous Pane Tab": "이전 창 탭 (Previous Pane Tab)",
    "Next Pane Tab": "다음 창 탭 (Next Pane Tab)",
    "Toggle Model Selector": "모델 선택창 전환 (Toggle Model Selector)",
    "Toggle Voice Recording": "음성 녹음 시작/중지 (Toggle Voice Recording)",
    "Find in Pane": "창 내 검색 (Find in Pane)",
    "Add to Chat/Quote": "대화에 추가/인용 (Add to Chat/Quote)",
    "Toggle Auxiliary Pane": "보조 창 전환 (Toggle Auxiliary Pane)",
    "Toggle Terminal": "터미널 전환 (Toggle Terminal)",
    "Execution": "실행 (Execution)",
    "실행": "실행 (Execution)",
    "Queued Messages": "대기열 메시지 (Queued Messages)",
    "대기열 메시지": "대기열 메시지 (Queued Messages)",
    "Configure when follow-up messages are sent.": "후속 메시지가 전송되는 시점을 설정합니다.",
    "Configure agent execution, queued message delivery, and permissions.": "에이전트 실행, 대기열 메시지 전송 및 권한을 설정합니다.",
    "Queue": "대기열 추가 (Queue)",
    "Send Immediately": "즉시 전송 (Send Immediately)",
    "Agent Settings": "에이전트 설정 (Agent Settings)",
    "에이전트 설정": "에이전트 설정 (Agent Settings)",
    "Security Preset": "보안 프리셋 (Security Preset)",
    "보안 프리셋": "보안 프리셋 (Security Preset)",
    "Controls the actions the agent can take.": "에이전트가 수행할 수 있는 작업을 제어합니다.",
    "Learn more about Default": "기본값(Default)에 대해 자세히 알아보기",
    "Default": "기본값 (Default)",
    "기본값": "기본값 (Default)",
    "Tool Permissions": "도구 권한 (Tool Permissions)",
    "도구 권한": "도구 권한 (Tool Permissions)",
    "Modify permissions for file, terminal, and MCP tools.": "파일, 터미널 및 MCP 도구의 권한을 수정합니다.",
    "Agent Behavior": "에이전트 동작 (Agent Behavior)",
    "에이전트 동작": "에이전트 동작 (Agent Behavior)",
    "Artifact Review Policy": "아티팩트 검토 정책 (Artifact Review Policy)",
    "아티팩트 검토 정책": "아티팩트 검토 정책 (Artifact Review Policy)",
    "Whether the agent asks you to review its documents.": "에이전트가 문서 검토를 요청할지 여부를 설정합니다.",
    "Always Ask": "항상 묻기 (Always Ask)",
    "항상 묻기": "항상 묻기 (Always Ask)",
    "Network Permissions": "네트워크 권한 (Network Permissions)",
    "네트워크 권한": "네트워크 권한 (Network Permissions)",
    "Network Access Rules": "네트워크 접근 규칙 (Network Access Rules)",
    "네트워크 접근 규칙": "네트워크 접근 규칙 (Network Access Rules)",
    "Configure allowed and denied URLs for reading.": "읽기를 허용하거나 차단할 URL을 설정합니다.",
    "Terminal & Tooling Permissions": "터미널 및 도구 권한 (Terminal & Tooling Permissions)",
    "터미널 및 도구 권한": "터미널 및 도구 권한 (Terminal & Tooling Permissions)",
    "Commands Outside Sandbox": "샌드박스 외부 명령어 (Commands Outside Sandbox)",
    "샌드박스 외부 명령어": "샌드박스 외부 명령어 (Commands Outside Sandbox)",
    "Configure allowed commands outside the sandbox.": "샌드박스 외부에서 허용할 명령어를 설정합니다.",
    "Browser": "브라우저 (Browser)",
    "브라우저": "브라우저 (Browser)",
    "Configure the browser subagent. It requires Google Chrome to be installed. The browser subagent can be invoked by typing /browser in the conversation input box.": "브라우저 서브에이전트를 설정합니다. Google Chrome이 설치되어 있어야 합니다. 대화 입력창에 /browser를 입력하여 브라우저 서브에이전트를 실행할 수 있습니다.",
    "Browser Javascript Execution Policy": "브라우저 자바스크립트 실행 정책 (Browser JS Execution Policy)",
    "브라우저 자바스크립트 실행 정책": "브라우저 자바스크립트 실행 정책 (Browser JS Execution Policy)",
    "Controls whether the agent can run custom JavaScript to automate complex browser actions.": "복잡한 브라우저 작업을 자동화하기 위해 에이전트가 사용자 지정 자바스크립트를 실행할 수 있는지 제어합니다.",
    "Request Review": "검토 요청 (Request Review)",
    "검토 요청": "검토 요청 (Request Review)",
    "Browser Actuation Rules": "브라우저 제어 규칙 (Browser Actuation Rules)",
    "브라우저 제어 규칙": "브라우저 제어 규칙 (Browser Actuation Rules)",
    "Configure allowed and denied URLs for browser actuation.": "브라우저 제어를 허용하거나 차단할 URL을 설정합니다.",
    "Browser Settings": "브라우저 설정 (Browser Settings)",
    "브라우저 설정": "브라우저 설정 (Browser Settings)",
    "Browser settings have moved": "브라우저 설정 위치가 이동되었습니다",
    "Browser settings have moved to the Browser section of General settings.": "브라우저 설정이 일반 설정의 브라우저 섹션으로 이동되었습니다.",
    "Terminal Sandbox": "터미널 샌드박스 (Terminal Sandbox)",
    "Non-Workspace File Access": "외부 파일 접근 권한 (Non-Workspace File Access)",
    "Internet Access Policy": "인터넷 접근 정책 (Internet Access Policy)",
    "Permission Grants": "권한 부여 설정 (Permission Grants)",
    "Command Allowlist": "명령어 허용 목록 (Command Allowlist)",
    "Command Denylist": "명령어 차단 목록 (Command Denylist)",
    "Browser Allowlist": "브라우저 허용 목록 (Browser Allowlist)",
    "Artifact Review Mode": "아티팩트 검토 모드 (Artifact Review Mode)",
    "Allow": "허용 (Allow)",
    "Ask": "항상 묻기 (Ask)",
    "Deny": "차단 (Deny)",
    "Always-proceed": "항상 진행 (Always-proceed)",
    "Request-review": "검토 요청 (Request-review)",
    "Strict": "엄격 모드 (Strict)",
    "Manage Antigravity app settings.": "Antigravity 앱 설정을 관리합니다.",
    "Remote Control": "리모컨 (Remote Control)",
    "Remote control": "리모컨 (Remote Control)",
    "리모컨": "리모컨 (Remote Control)",
    "Enable Remote Control": "리모컨 활성화 (Enable Remote Control)",
    "리모컨 활성화": "리모컨 활성화 (Enable Remote Control)",
    "Work with local agents from another device.": "다른 기기에서 로컬 에이전트와 연결하여 작업합니다.",
    "Version": "버전 (Version)",
    "version": "버전 (Version)",
    "버전": "버전 (Version)",
    "버젼": "버전 (Version)",
    "App version": "앱 버전 (App Version)",
    "앱 버젼": "앱 버전 (App Version)",
    "앱 버전": "앱 버전 (App Version)",
    "Prevent Sleep": "절전 모드 방지 (Prevent Sleep)",
    "절전 모드 방지": "절전 모드 방지 (Prevent Sleep)",
    "Prevent the computer from sleeping while the app is running.": "앱이 실행 중일 때 컴퓨터가 절전 모드로 들어가지 않도록 방지합니다.",
    "Keep In Menu Bar": "메뉴 표시줄에 유지 (Keep in Menu Bar)",
    "Keep in Menu Bar": "메뉴 표시줄에 유지 (Keep in Menu Bar)",
    "메뉴 표시줄에 유지": "메뉴 표시줄에 유지 (Keep in Menu Bar)",
    "메뉴 표시줄(트레이)에 유지": "메뉴 표시줄에 유지 (Keep in Menu Bar)",
    "Keep the app accessible from the menu bar and running in the background when all windows are closed.": "모든 창이 닫혀도 메뉴 표시줄에서 앱에 접근할 수 있도록 백그라운드에서 계속 실행합니다.",
    "Notification Settings": "알림 설정 (Notification Settings)",
    "알림 설정": "알림 설정 (Notification Settings)",
    "Notifications": "알림 (Notifications)",
    "알림": "알림 (Notifications)",
    "To modify notification settings, open your operating system's system preferences.": "알림 설정을 변경하려면 운영체제의 시스템 환경설정을 여세요.",
    "Open System Preferences": "시스템 환경설정 열기 (System Preferences)",
    "Advanced Settings": "고급 설정 (Advanced Settings)",
    "고급 설정": "고급 설정 (Advanced Settings)",
    "Automatic Check for Updates": "업데이트 자동 확인 (Automatic Check for Updates)",
    "업데이트 자동 확인": "업데이트 자동 확인 (Automatic Check for Updates)",
    "Auto-check for updates": "업데이트 자동 확인 (Auto-check for updates)",
    "Check for updates": "업데이트 확인 (Check for Updates)",
    "Check for Updates": "업데이트 확인 (Check for Updates)",
    "업데이트 확인": "업데이트 확인 (Check for Updates)",
    "Automatically prompt you to restart the app when a new update is available. When disabled, you can check for updates manually from the app menu.": "새 업데이트가 있으면 앱을 재시작하라는 알림을 자동으로 표시합니다. 비활성화하면 앱 메뉴에서 수동으로 업데이트를 확인할 수 있습니다.",
    "Configure the agent's visual theme and display preferences.": "에이전트의 시각적 테마와 디스플레이 환경설정을 지정합니다.",
    "Verbose Agent Chat": "상세 에이전트 대화 (Verbose Agent Chat)",
    "상세 에이전트 대화 (Verbose)": "상세 에이전트 대화 (Verbose Agent Chat)",
    "Display and preserve intermediate thinking steps.": "중간 추론 및 생각 과정을 화면에 표시하고 유지합니다.",
    "Conversation Width": "대화창 너비 (Conversation Width)",
    "대화창 너비": "대화창 너비 (Conversation Width)",
    "Configure the maximum width of the conversation panel.": "대화창 패널의 최대 너비를 설정합니다.",
    "Narrow": "좁게 (Narrow)",
    "Wide": "넓게 (Wide)",
    "Preset": "프리셋 (Preset)",
    "프리셋": "프리셋 (Preset)",
    "Default Dark": "기본 어두운 테마 (Default Dark)",
    "기본 어두운 테마": "기본 어두운 테마 (Default Dark)",
    "Default Light": "기본 밝은 테마 (Default Light)",
    "기본 밝은 테마": "기본 밝은 테마 (Default Light)",
    "Background": "배경색 (Background)",
    "배경색": "배경색 (Background)",
    "Foreground": "전경색 (Foreground)",
    "전경색(글자색)": "전경색 (Foreground)",
    "Accent": "강조색 (Accent)",
    "강조색(액센트)": "강조색 (Accent)",
    "Dark": "다크 모드 (Dark)",
    "다크 모드": "다크 모드 (Dark)",
    "Light": "라이트 모드 (Light)",
    "라이트 모드": "라이트 모드 (Light)",
    "System": "시스템 설정 따름 (System)",
    "시스템 설정 따름": "시스템 설정 따름 (System)",
    "Model & Usage": "모델 및 한도 (Model & Usage)",
    "Models & Usage": "모델 및 한도 (Models & Usage)",
    "Model and Usage": "모델 및 한도 (Model & Usage)",
    "Models and Usage": "모델 및 한도 (Models & Usage)",
    "모델 및 한도": "모델 및 한도 (Models & Usage)",
    "Models": "모델 (Models)",
    "Model": "모델 (Model)",
    "모델": "모델 (Models)",
    "Manage your model quota and credits.": "모델 할당량과 크레딧을 관리합니다.",
    "Plan": "플랜 (Plan)",
    "plan": "플랜 (Plan)",
    "플랜": "플랜 (Plan)",
    "You can upgrade to a Google AI Ultra plan to receive higher rate limits.": "더 높은 사용 한도를 이용하려면 Google AI Ultra 플랜으로 업그레이드할 수 있습니다.",
    "Model Credits": "크레딧사용여부 (Model Credits)",
    "Model credits": "크레딧사용여부 (Model Credits)",
    "크레딧사용여부": "크레딧사용여부 (Model Credits)",
    "Enable AI Credit Overages": "AI 크레딧 초과 사용 허용 (Enable AI Credit Overages)",
    "AI 크레딧 초과 사용 허용": "AI 크레딧 초과 사용 허용 (Enable AI Credit Overages)",
    "When toggled on, Antigravity will use your AI credits to fulfill model requests once you're out of model quota. Antigravity will always use your model quota first before using AI credits.": "활성화하면 모델 할당량이 소진되었을 때 AI 크레딧을 사용하여 모델 요청을 처리합니다. Antigravity는 항상 AI 크레딧을 사용하기 전에 모델 할당량을 먼저 사용합니다.",
    "Gemini Models": "Gemini 모델 (Gemini Models)",
    "Gemini 모델": "Gemini 모델 (Gemini Models)",
    "Claude and GPT models": "Claude 및 GPT 모델 (Claude & GPT Models)",
    "Claude 및 GPT 모델": "Claude 및 GPT 모델 (Claude & GPT Models)",
    "Weekly Limit Remaining": "주간 남은 한도 (Weekly Limit)",
    "주간 남은 한도": "주간 남은 한도 (Weekly Limit)",
    "Five Hour Limit Remaining": "5시간 남은 한도 (5-Hour Limit)",
    "5시간 남은 한도": "5시간 남은 한도 (5-Hour Limit)",
    "Quota": "할당량 (Quota)",
    "할당량": "할당량 (Quota)",
    "Customizations": "커스터마이징 (Customizations)",
    "Customization": "커스터마이징 (Customization)",
    "커스터마이징": "커스터마이징 (Customizations)",
    "Configure default behaviors, skills, and MCP servers. Learn more.": "기본 동작, 스킬 및 MCP 서버를 설정합니다. 자세히 알아보기.",
    "Configure default behaviors, skills, and MCP servers.": "기본 동작, 스킬 및 MCP 서버를 설정합니다.",
    "Token Usage": "토큰 사용량 (Token Usage)",
    "토큰 사용량": "토큰 사용량 (Token Usage)",
    "The breakdown below shows token usage from customizations like skills, rules, and MCP. If the budget is exceeded, large customizations will be truncated automatically.": "아래 내역은 스킬, 규칙, MCP와 같은 커스터마이징의 토큰 사용량을 보여줍니다. 한도를 초과하면 용량이 큰 커스터마이징은 자동으로 잘립니다.",
    "Rules": "규칙 (Rules)",
    "규칙": "규칙 (Rules)",
    "Skills": "스킬 (Skills)",
    "스킬": "스킬 (Skills)",
    "Global": "전역 (Global)",
    "전역": "전역 (Global)",
    "Installed MCP Servers": "설치된 MCP 서버 (Installed MCP Servers)",
    "설치된 MCP 서버": "설치된 MCP 서버 (Installed MCP Servers)",
    "Authenticate": "인증하기 (Authenticate)",
    "Plugins": "플러그인 (Plugins)",
    "플러그인": "플러그인 (Plugins)",
    "Build With Google Plugins": "Build With Google 플러그인 (Build With Google Plugins)",
    "Browse and enable plugins from the Build With Google catalog.": "Build With Google 카탈로그에서 플러그인을 둘러보고 활성화하세요.",
    "Comprehensive guide and reference for the Antigravity Customization System. Use to explain how customizations work, their loading priority, discovery mechanisms, and to guide the creation of skills, rules, plugins, hooks, and MCP servers.": "Antigravity 커스터마이징 시스템에 대한 종합 안내 및 참조 문서입니다. 커스터마이징 동작 방식, 로딩 우선순위, 탐색 메커니즘을 설명하고 스킬, 규칙, 플러그인, 훅, MCP 서버 생성을 안내합니다.",
    "Provides a comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), including the Antigravity CLI (agy), Antigravity 2.0, Antigravity IDE, Python SDK, slash commands, keybindings, and customizations (skills, rules, MCP, sidecars). Activate this skill when the user asks questions about how to use, configure, or customize Antigravity, AGY, the agy CLI, the Antigravity IDE, or Antigravity 2.0.": "Google Antigravity(AGY)의 CLI(agy), 2.0, IDE, Python SDK, 슬래시 명령어, 단축키 및 커스터마이징에 대한 종합 가이드와 빠른 참조를 제공합니다.",
    "Create stunning, animation-rich HTML presentations from scratch or by converting PowerPoint files. Use when the user wants to build a presentation, convert a PPT/PPTX to web, or create slides for a talk/pitch. Helps non-designers discover their aesthetic through visual exploration rather than abstract choices.": "처음부터 만들거나 파워포인트 파일을 변환하여 멋진 애니메이션 효과가 들어간 HTML 프레젠테이션을 생성합니다.",
    "How to render rich interactive HTML widgets inline in the chat or as standalone artifacts. Use this skill when you want to show the user diagrams, data visualizations, interactive controls, educational walkthroughs, or any rich visual content beyond plain text and markdown.": "채팅창 내부 인라인 또는 독립형 아티팩트로 인터랙티브 HTML 위젯을 렌더링하는 방법을 안내합니다.",
    "Automatically migrate legacy workflows to modern skills across global and workspace configurations. Scans for existing workflows, creates target SKILL.md files, and safely archives old workflow files.": "기존 레거시 워크플로를 전역 및 워크스페이스 구성에 걸쳐 최신 스킬 형태로 자동 이전합니다.",
    "Guidelines for interacting with GitHub and request permissions from the user when commands fail due to restrictions in the agent environment.": "GitHub와의 상호작용 지침 및 에이전트 환경 제약으로 명령이 실패할 때 사용자에게 권한을 요청하는 가이드입니다.",
    "Active Agent": "활성 에이전트 (Active Agent)",
    "활성 에이전트": "활성 에이전트 (Active Agent)",
    "Idle": "대기 중 (Idle)",
    "대기 중": "대기 중 (Idle)",
    "Subagents": "서브에이전트 (Subagents)",
    "서브에이전트": "서브에이전트 (Subagents)",
    "Background Tasks": "백그라운드 작업 (Background Tasks)",
    "백그라운드 작업": "백그라운드 작업 (Background Tasks)",
    "Artifacts": "아티팩트 (Artifacts)",
    "아티팩트": "아티팩트 (Artifacts)",
    "Files Changed": "변경된 파일 (Files Changed)",
    "변경된 파일": "변경된 파일 (Files Changed)",
    "Terminal": "터미널 (Terminal)",
    "터미널": "터미널 (Terminal)",
    "Terminals": "터미널 (Terminals)",
    "No running tasks": "실행 중인 작업이 없습니다",
    "No active subagents": "활성 서브에이전트가 없습니다",
    "No artifacts yet": "아직 생성된 아티팩트가 없습니다",
    "No changed files": "변경된 파일이 없습니다",
    "No conversations yet": "대화 기록이 없습니다",
    "Planning Mode": "기획 모드 (Planning Mode)",
    "기획 모드": "기획 모드 (Planning Mode)",
    "Fast Mode": "빠른 모드 (Fast Mode)",
    "빠른 모드": "빠른 모드 (Fast Mode)",
    "Agent Mode": "에이전트 모드 (Agent Mode)",
    "에이전트 모드": "에이전트 모드 (Agent Mode)",
    "Review": "검토 (Review)",
    "검토": "검토 (Review)",
    "Changes": "변경 사항 (Changes)",
    "변경 사항": "변경 사항 (Changes)",
    "Diff": "차이점 (Diff)",
    "차이점": "차이점 (Diff)",
    "Send": "전송 (Send)",
    "전송": "전송 (Send)",
    "Proceed": "진행 (Proceed)",
    "진행": "진행 (Proceed)",
    "Approve": "승인 (Approve)",
    "승인": "승인 (Approve)",
    "Reject": "거절 (Reject)",
    "거절": "거절 (Reject)",
    "Always Proceed": "항상 진행 (Always Proceed)",
    "항상 진행": "항상 진행 (Always Proceed)",
    "Ask for Review": "검토 요청 (Ask for Review)",
    "Review Changes": "변경 사항 검토 (Review Changes)",
    "Cancel": "취소 (Cancel)",
    "취소": "취소 (Cancel)",
    "Close": "닫기 (Close)",
    "닫기": "닫기 (Close)",
    "Open": "열기 (Open)",
    "Save": "저장 (Save)",
    "저장": "저장 (Save)",
    "Delete": "삭제 (Delete)",
    "삭제": "삭제 (Delete)",
    "수정": "수정 (Edit)",
    "Retry": "재시도 (Retry)",
    "재시도": "재시도 (Retry)",
    "Clear": "초기화 (Clear)",
    "초기화": "초기화 (Clear)",
    "Copy": "복사 (Copy)",
    "복사": "복사 (Copy)",
    "Copied": "복사됨 (Copied)",
    "복사됨": "복사됨 (Copied)",
    "Copied!": "복사 완료! (Copied!)",
    "복사 완료!": "복사 완료! (Copied!)",
    "Thinking...": "생각하는 중... (Thinking...)",
    "Working...": "작업 수행 중... (Working...)",
    "Generating...": "생성 중... (Generating...)",
    "Searching...": "검색 중... (Searching...)",
    "Reading...": "읽는 중... (Reading...)",
    "Running...": "실행 중... (Running...)",
    "창크기 (Window)": "윈도우 (Window)",
    "윈도우": "윈도우 (Window)"
};
  const EXACT = isBilingual ? BILINGUAL_EXACT : KOREAN_EXACT;
  const PLACEHOLDERS = {
    "Ask a question, describe a task, or use / for commands": "질문하거나 작업을 설명하세요 (명령어: /)",
    "Ask a question, describe a task, or use / for commands...": "질문하거나 작업을 설명하세요 (명령어: /)...",
    "Search...": "검색 (Search)...",
    "Search": "검색 (Search)",
    "Filter...": "필터 (Filter)...",
    "Type a message...": "메시지를 입력하세요...",
    "Add a custom rule...": "사용자 지정 규칙 추가...",
    "Ask anything, @ to mention, / for actions": "무엇이든 물어보세요 (@: 멘션, /: 명령어)",
    "Ask anything, @ to mention, / for commands": "무엇이든 물어보세요 (@: 멘션, /: 명령어)",
    "Ask anything, @ to mention, / for actions...": "무엇이든 물어보세요 (@: 멘션, /: 명령어)...",
    "Ask anything, @ to mention, / for commands...": "무엇이든 물어보세요 (@: 멘션, /: 명령어)..."
};

  const translatedValues = new Set(Object.values(EXACT));
  translatedValues.add('일반설정 (General)');
  translatedValues.add('일반 (General)');
  translatedValues.add('일반설정');
  translatedValues.add('일반');

  const processedNodes = new WeakSet();

  function shouldIgnore(el) {
    if (!el || el.nodeType !== 1) return false;
    const tag = el.tagName;
    if (['CODE', 'PRE', 'SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG', 'CANVAS', 'TEXTAREA'].includes(tag)) {
      return true;
    }
    if (el.closest && (
      el.closest('pre') ||
      el.closest('code') ||
      el.closest('.monaco-editor') ||
      el.closest('.code-block') ||
      el.closest('.xterm') ||
      el.closest('.terminal') ||
      el.closest('.markdown') ||
      el.closest('.prose')
    )) {
      return true;
    }
    return false;
  }

  function formatTime(str) {
    if (!str) return '';
    return str
      .replace(/(\d+)\s*days?/gi, '$1일')
      .replace(/(\d+)\s*hours?/gi, '$1시간')
      .replace(/(\d+)\s*minutes?/gi, '$1분')
      .replace(/(\d+)\s*seconds?/gi, '$1초')
      .replace(/,\s*/g, ' ');
  }

  const DYNAMIC_PATTERNS = isBilingual ? [
    {
      regex: /^You have used some of your weekly limit, it will fully refresh in (.*?)\.?$/i,
      replacer: (_, time) => `주간 한도를 일부 사용했습니다. ${formatTime(time)} 후에 완전히 충전됩니다. (Weekly Limit)`
    },
    {
      regex: /^You have used some of your 5-hour limit, it will fully refresh in (.*?)\.?$/i,
      replacer: (_, time) => `5시간 한도를 일부 사용했습니다. ${formatTime(time)} 후에 완전히 충전됩니다. (5-Hour Limit)`
    },
    {
      regex: /^([\d\.]+)%\s*of the customization budget is available\.?$/i,
      replacer: (_, pct) => `커스터마이징 용량의 ${pct}%를 사용할 수 있습니다.`
    },
    {
      regex: /^Your Plan:\s*(.*)$/i,
      replacer: (_, plan) => `현재 플랜 (Your Plan): ${plan}`
    },
    {
      regex: /^Plugin:\s*(.*)$/i,
      replacer: (_, plugin) => `플러그인 (Plugin): ${plugin}`
    },
    {
      regex: /^Show (\d+) breakdowns?$/i,
      replacer: (_, num) => `세부 내역 ${num}개 보기 (Show breakdowns)`
    },
    {
      regex: /^Permanently delete (.*?)\.?$/i,
      replacer: (_, proj) => `프로젝트 ${proj}을(를) 영구적으로 삭제합니다.`
    }
  ] : [
    {
      regex: /^You have used some of your weekly limit, it will fully refresh in (.*?)\.?$/i,
      replacer: (_, time) => `주간 한도를 일부 사용했습니다. ${formatTime(time)} 후에 완전히 충전됩니다.`
    },
    {
      regex: /^You have used some of your 5-hour limit, it will fully refresh in (.*?)\.?$/i,
      replacer: (_, time) => `5시간 한도를 일부 사용했습니다. ${formatTime(time)} 후에 완전히 충전됩니다.`
    },
    {
      regex: /^([\d\.]+)%\s*of the customization budget is available\.?$/i,
      replacer: (_, pct) => `커스터마이징 용량의 ${pct}%를 사용할 수 있습니다.`
    },
    {
      regex: /^Your Plan:\s*(.*)$/i,
      replacer: (_, plan) => `현재 플랜: ${plan}`
    },
    {
      regex: /^Plugin:\s*(.*)$/i,
      replacer: (_, plugin) => `플러그인: ${plugin}`
    },
    {
      regex: /^Show (\d+) breakdowns?$/i,
      replacer: (_, num) => `세부 내역 ${num}개 보기`
    },
    {
      regex: /^Permanently delete (.*?)\.?$/i,
      replacer: (_, proj) => `프로젝트 ${proj}을(를) 영구적으로 삭제합니다.`
    }
  ];

  function translateNode(node) {
    if (!node || node.nodeType !== 3) return;
    if (processedNodes.has(node)) return;

    const val = node.nodeValue;
    if (!val) return;
    const trimmed = val.trim();
    if (!trimmed) return;

    // General 특수 처리: 사이드바는 '일반설정', 본문 섹션은 '일반'
    if (
      trimmed === 'General' ||
      trimmed === 'general' ||
      trimmed === '일반설정' ||
      trimmed === '일반' ||
      trimmed === '일반설정 (General)' ||
      trimmed === '일반 (General)'
    ) {
      const isSidebarNav = node.parentElement && (
        node.parentElement.closest('[data-testid="settings-nav-item-General"]') ||
        node.parentElement.closest('nav') ||
        node.parentElement.closest('.settings-nav')
      );
      const targetText = isSidebarNav
        ? (isBilingual ? '일반설정 (General)' : '일반설정')
        : (isBilingual ? '일반 (General)' : '일반');
      if (trimmed !== targetText) {
        processedNodes.add(node);
        node.nodeValue = val.replace(trimmed, targetText);
      }
      return;
    }

    // delete-project-button 특수 처리
    if (node.parentElement && node.parentElement.closest('[data-testid="delete-project-button"]')) {
      const btn = node.parentElement.closest('[data-testid="delete-project-button"]');
      const btnText = isBilingual ? '프로젝트 삭제 (Delete Project)' : '프로젝트 삭제';
      if (btn && btn.innerText.trim() !== btnText) {
        processedNodes.add(node);
        btn.innerText = btnText;
        return;
      }
    }

    // 이미 변환된 문자열이면 중복 변환 방지
    if (translatedValues.has(trimmed)) return;

    if (EXACT[trimmed]) {
      processedNodes.add(node);
      node.nodeValue = val.replace(trimmed, EXACT[trimmed]);
      return;
    }

    for (let p = 0; p < DYNAMIC_PATTERNS.length; p++) {
      const pat = DYNAMIC_PATTERNS[p];
      if (pat.regex.test(trimmed)) {
        processedNodes.add(node);
        node.nodeValue = val.replace(trimmed, trimmed.replace(pat.regex, pat.replacer));
        return;
      }
    }
  }

  function translateAttributes(el) {
    if (!el || el.nodeType !== 1) return;
    if (shouldIgnore(el)) return;

    // Placeholder
    if (el.placeholder) {
      const p = el.placeholder.trim();
      if (PLACEHOLDERS[p]) {
        el.placeholder = PLACEHOLDERS[p];
      } else if (EXACT[p]) {
        el.placeholder = EXACT[p];
      }
    }

    // Title
    if (el.title) {
      const t = el.title.trim();
      if (EXACT[t]) el.title = EXACT[t];
    }

    // Aria-label
    const aria = el.getAttribute('aria-label');
    if (aria) {
      const trimmed = aria.trim();
      if (EXACT[trimmed]) {
        el.setAttribute('aria-label', EXACT[trimmed]);
      }
    }

    // data-tooltip
    const tooltip = el.getAttribute('data-tooltip');
    if (tooltip) {
      const trimmed = tooltip.trim();
      if (EXACT[trimmed]) {
        el.setAttribute('data-tooltip', EXACT[trimmed]);
      }
    }
  }

  function walk(root) {
    if (!root) return;
    if (root.nodeType === 1 && shouldIgnore(root)) return;

    if (root.nodeType === 1) {
      translateAttributes(root);
      const elements = root.querySelectorAll('*');
      for (let i = 0; i < elements.length; i++) {
        translateAttributes(elements[i]);
      }

      const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: function (node) {
            if (shouldIgnore(node.parentElement)) return NodeFilter.FILTER_REJECT;
            const text = node.nodeValue ? node.nodeValue.trim() : '';
            if (!text) return NodeFilter.FILTER_REJECT;
            if (
              text === 'General' ||
              text === 'general' ||
              text === '일반설정' ||
              text === '일반'
            ) return NodeFilter.FILTER_ACCEPT;
            if (translatedValues.has(text)) return NodeFilter.FILTER_REJECT;
            if (EXACT[text]) return NodeFilter.FILTER_ACCEPT;
            for (let p = 0; p < DYNAMIC_PATTERNS.length; p++) {
              if (DYNAMIC_PATTERNS[p].regex.test(text)) return NodeFilter.FILTER_ACCEPT;
            }
            return NodeFilter.FILTER_SKIP;
          }
        }
      );

      let node;
      const nodes = [];
      while ((node = walker.nextNode())) {
        nodes.push(node);
      }
      for (let i = 0; i < nodes.length; i++) {
        translateNode(nodes[i]);
      }
    }
  }


  function getModeLabel(mode) {
    if (mode === MODES.KOREAN) return '순수 한글';
    if (mode === MODES.BILINGUAL) return '한영 병기';
    if (mode === MODES.OFF) return 'English';
    return mode;
  }

  function showToast(msg) {
    const toast = document.createElement('div');
    toast.setAttribute('style', `
      position: fixed;
      top: 24px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(17, 24, 39, 0.95);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 8px 18px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
      z-index: 999999999;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(10px);
      transition: opacity 0.3s ease;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    `);
    toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 1800);
  }

  function setupLanguageSwitcher() {
    if (!document.body || document.getElementById('antigravity-lang-switcher')) return;

    // 단축키 등록: Ctrl + Shift + L
    if (!window.__antigravity_shortcut_registered) {
      window.__antigravity_shortcut_registered = true;
      window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && (e.key === 'L' || e.key === 'l' || e.code === 'KeyL')) {
          e.preventDefault();
          let nextMode = MODES.BILINGUAL;
          if (currentMode === MODES.BILINGUAL) nextMode = MODES.KOREAN;
          else if (currentMode === MODES.KOREAN) nextMode = MODES.OFF;
          else if (currentMode === MODES.OFF) nextMode = MODES.BILINGUAL;

          showToast('언어 모드 변경: ' + getModeLabel(nextMode));
          setTimeout(() => {
            window.__antigravity_set_lang_mode(nextMode);
          }, 350);
        }
      });
    }

    // 사용자가 위젯 숨김을 선택했는지 확인
    if (localStorage.getItem('antigravity_hide_lang_widget') === 'true') {
      return;
    }

    const container = document.createElement('div');
    container.id = 'antigravity-lang-switcher';
    container.setAttribute('style', `
      position: fixed;
      bottom: 14px;
      right: 14px;
      z-index: 99999999;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 12px;
      user-select: none;
    `);

    const btn = document.createElement('button');
    btn.id = 'antigravity-lang-btn';
    btn.title = '언어 모드 전환 (단축키: Ctrl+Shift+L)';
    btn.innerHTML = `<span style="margin-right: 4px;">🌐</span><span>${getModeLabel(currentMode)}</span><span style="font-size: 9px; opacity: 0.7; margin-left: 3px;">▾</span>`;
    btn.setAttribute('style', `
      background: rgba(26, 27, 30, 0.85);
      color: #d1d5db;
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 16px;
      padding: 4px 10px;
      font-size: 11px;
      font-weight: 500;
      cursor: pointer;
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      transition: all 0.2s ease;
      outline: none;
    `);

    btn.onmouseenter = () => {
      btn.style.background = 'rgba(38, 40, 44, 0.95)';
      btn.style.borderColor = 'rgba(255, 255, 255, 0.35)';
      btn.style.color = '#ffffff';
      btn.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.35)';
    };
    btn.onmouseleave = () => {
      btn.style.background = 'rgba(26, 27, 30, 0.85)';
      btn.style.borderColor = 'rgba(255, 255, 255, 0.18)';
      btn.style.color = '#d1d5db';
      btn.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.25)';
    };

    const menu = document.createElement('div');
    menu.id = 'antigravity-lang-menu';
    menu.setAttribute('style', `
      display: none;
      position: absolute;
      bottom: 30px;
      right: 0;
      width: 195px;
      background: #1e1f23;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 8px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
      padding: 6px;
      flex-direction: column;
      gap: 2px;
    `);

    const options = [
      { id: MODES.BILINGUAL, label: '🌐 한영 병기 (Bilingual)', desc: '한국어 + 영문 동시 표기' },
      { id: MODES.KOREAN, label: '🇰🇷 순수 한글 (Pure Korean)', desc: '깔끔한 한국어 전용' },
      { id: MODES.OFF, label: '🇺🇸 영문 원본 (English)', desc: '오리지널 영문 모드' }
    ];

    options.forEach(opt => {
      const item = document.createElement('div');
      const isSelected = currentMode === opt.id;
      item.setAttribute('style', `
        padding: 6px 8px;
        border-radius: 6px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        background: ${isSelected ? 'rgba(59, 130, 246, 0.2)' : 'transparent'};
        border: 1px solid ${isSelected ? 'rgba(59, 130, 246, 0.4)' : 'transparent'};
        transition: background 0.15s;
      `);
      item.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-weight: ${isSelected ? '600' : '400'}; color: ${isSelected ? '#60a5fa' : '#e5e7eb'}; font-size: 12px;">${opt.label}</span>
          ${isSelected ? '<span style="color: #60a5fa; font-size: 11px;">✓</span>' : ''}
        </div>
        <span style="font-size: 10px; color: #9ca3af; margin-top: 2px;">${opt.desc}</span>
      `;
      item.onmouseenter = () => {
        if (!isSelected) item.style.background = 'rgba(255, 255, 255, 0.08)';
      };
      item.onmouseleave = () => {
        if (!isSelected) item.style.background = 'transparent';
      };
      item.onclick = (e) => {
        e.stopPropagation();
        menu.style.display = 'none';
        window.__antigravity_set_lang_mode(opt.id);
      };
      menu.appendChild(item);
    });

    const divider = document.createElement('div');
    divider.setAttribute('style', 'height: 1px; background: rgba(255, 255, 255, 0.1); margin: 4px 2px;');
    menu.appendChild(divider);

    const hideItem = document.createElement('div');
    hideItem.setAttribute('style', `
      padding: 4px 8px;
      border-radius: 4px;
      cursor: pointer;
      color: #9ca3af;
      font-size: 10px;
      text-align: center;
      transition: background 0.15s;
    `);
    hideItem.innerText = '위젯 숨기기 (Ctrl+Shift+L로 계속 사용)';
    hideItem.onmouseenter = () => { hideItem.style.background = 'rgba(255, 255, 255, 0.08)'; };
    hideItem.onmouseleave = () => { hideItem.style.background = 'transparent'; };
    hideItem.onclick = (e) => {
      e.stopPropagation();
      localStorage.setItem('antigravity_hide_lang_widget', 'true');
      container.remove();
      showToast('언어 위젯이 숨겨졌습니다. 단축키(Ctrl+Shift+L)는 계속 작동합니다.');
    };
    menu.appendChild(hideItem);

    btn.onclick = (e) => {
      e.stopPropagation();
      menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    };

    document.addEventListener('click', () => {
      menu.style.display = 'none';
    });

    container.appendChild(menu);
    container.appendChild(btn);
    document.body.appendChild(container);
  }

  function start() {
    if (!document.body) {
      setTimeout(start, 200);
      return;
    }

    walk(document.body);

    if (window.__antigravity_i18n_observer) {
      window.__antigravity_i18n_observer.disconnect();
    }
    if (window.__antigravity_i18n_interval) {
      clearInterval(window.__antigravity_i18n_interval);
    }

    let timer = null;
    const observer = new MutationObserver(() => {
      if (timer) return;
      timer = setTimeout(() => {
        timer = null;
        walk(document.body);
      }, 100);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['aria-label', 'title', 'placeholder', 'data-tooltip']
    });

    window.__antigravity_i18n_observer = observer;
    window.__antigravity_i18n_interval = setInterval(() => {
      if (document.body) {
        walk(document.body);
      }
    }, 1500);

    console.log('[Antigravity-i18n] Localization active and watching (Mode: ' + currentMode + ')');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupLanguageSwitcher();
      if (currentMode !== MODES.OFF) setTimeout(start, 200);
    });
  } else {
    setupLanguageSwitcher();
    if (currentMode !== MODES.OFF) start();
  }
})();
