(function () {
  'use strict';
  console.log('[Antigravity-i18n] Updating Korean localization rules...');

  const EXACT = {
    "New Conversation": "새 대화",
    "Projects": "프로젝트",
    "Scheduled Tasks": "예약된 작업",
    "Skills & Customizations": "스킬 및 커스터마이징",
    "Settings": "설정",
    "Collapse sidebar": "사이드바",
    "Expand sidebar": "사이드바",
    "Active Agent": "활성 에이전트",
    "Idle": "대기 중",
    "Subagents": "서브에이전트",
    "Background Tasks": "백그라운드 작업",
    "Artifacts": "아티팩트",
    "Files Changed": "변경된 파일",
    "Terminal": "터미널",
    "Terminals": "터미널",
    "No running tasks": "실행 중인 작업이 없습니다",
    "No active subagents": "활성 서브에이전트가 없습니다",
    "No artifacts yet": "아직 생성된 아티팩트가 없습니다",
    "No changed files": "변경된 파일이 없습니다",
    "Planning Mode": "기획 모드",
    "Fast Mode": "빠른 모드",
    "Agent Mode": "에이전트 모드",
    "Review": "검토",
    "Changes": "변경 사항",
    "Diff": "차이점",
    "Send": "전송",
    "Proceed": "진행",
    "Approve": "승인",
    "Reject": "거절",
    "Always Proceed": "항상 진행",
    "Ask for Review": "검토 요청",
    "Review Changes": "변경 사항 검토",
    "Cancel": "취소",
    "Close": "닫기",
    "Save": "저장",
    "Delete": "삭제",
    "Edit": "수정",
    "Retry": "재시도",
    "Clear": "초기화",
    "Copy": "복사",
    "Copied": "복사됨",
    "Copied!": "복사 완료!",
    "Thinking...": "생각하는 중...",
    "Working...": "작업 수행 중...",
    "Generating...": "생성 중...",
    "Searching...": "검색 중...",
    "Reading...": "읽는 중...",
    "Running...": "실행 중...",
    "Global Settings": "전역 설정",
    "Project Settings": "프로젝트 설정",
    "Model Selection": "모델 선택",
    "Tool Execution Policy": "도구 실행 정책",
    "Terminal Sandbox": "터미널 샌드박스",
    "Non-Workspace File Access": "외부 파일 접근 권한",
    "Internet Access Policy": "인터넷 접근 정책",
    "Permission Grants": "권한 부여 설정",
    "Command Allowlist": "명령어 허용 목록",
    "Command Denylist": "명령어 차단 목록",
    "Browser Allowlist": "브라우저 허용 목록",
    "Artifact Review Mode": "아티팩트 검토 모드",
    "Notifications": "알림",
    "Appearance": "화면 테마",
    "App Settings": "앱 환경설정",
    "Keep computer awake": "절전 모드 방지",
    "Run in background": "백그라운드 실행 유지",
    "Auto-check for updates": "업데이트 자동 확인",
    "Check for updates": "업데이트 확인",
    "Check for Updates": "업데이트 확인",
    "Allow": "허용",
    "Ask": "항상 묻기",
    "Deny": "차단",
    "Always-proceed": "항상 진행",
    "Request-review": "검토 요청",
    "Strict": "엄격 모드",
    "Dark": "다크 모드",
    "Light": "라이트 모드",
    "System": "시스템 설정 따름",
    "Docs": "문서",
    "New Window": "새 창",
    "Toggle Developer Tools": "개발자 도구 전환",
    "Quit Antigravity": "Antigravity 종료",
    "Open Project": "프로젝트 열기",
    "Add Project": "프로젝트 추가",
    "Models": "모델",
    "Model": "모델",
    "Browser": "브라우저",
    "Customization": "커스터마이징",
    "Customizations": "커스터마이징",
    "Developer": "개발자 설정",
    "Editor": "에디터",
    "Quota": "할당량",
    "File": "파일",
    "View": "보기",
    "Window": "창크기",
    "Antigravity": "Antigravity",
    "Conversations": "최근대화",
    "Conversation": "대화",
    "Other Conversations": "다른 대화",
    "Shortcuts": "단축키",
    "Provide Feedback": "피드백",
    "Provide feedback": "피드백",
    "Feedback": "피드백",
    "Not in Project": "프로젝트 외",
    "Not in project": "프로젝트 외",
    "Open IDE": "IDE 열기",
    "Open in IDE": "IDE에서 열기",
    "Create Project": "프로젝트 생성",
    "Create project": "프로젝트 생성",
    "Select Folder(s)": "폴더 선택",
    "Select folder(s)": "폴더 선택",
    "Select Folder": "폴더 선택",
    "Select folder": "폴더 선택",
    "Select Folders": "폴더 선택",
    "Select folders": "폴더 선택",
    "Conversation History": "대화 기록",
    "No conversations yet": "대화 기록이 없습니다",
    "Ask anything, @ to mention, / for actions": "무엇이든 물어보세요 (@: 멘션, /: 명령어)",
    "Ask anything, @ to mention, / for commands": "무엇이든 물어보세요 (@: 멘션, /: 명령어)",
    "Ask anything, @ to mention, / for actions...": "무엇이든 물어보세요 (@: 멘션, /: 명령어)...",
    "Ask anything, @ to mention, / for commands...": "무엇이든 물어보세요 (@: 멘션, /: 명령어)...",
    "Toggle Sidebar": "사이드바",
    "Toggle sidebar": "사이드바",
    "Toggle Sidebar (Ctrl+B)": "사이드바 (Ctrl+B)",
    "Toggle Sidebar (Cmd+B)": "사이드바 (Cmd+B)",
    "Toggle Sidebar (Ctrl + B)": "사이드바 (Ctrl + B)",
    "Toggle Sidebar (Cmd + B)": "사이드바 (Cmd + B)",
    "Collapse Sidebar": "사이드바",
    "Expand Sidebar": "사이드바",
    "Command Palette": "명령어모음",
    "Command palette": "명령어모음",
    "Open Command Palette": "명령어모음",
    "Open Command palette": "명령어모음",
    "Open command palette": "명령어모음",
    "Command Palette...": "명령어모음...",
    "Open Command Palette...": "명령어모음...",
    "Commmand Pallette": "명령어모음",
    "Open Keyboard Shortcuts": "단축키",
    "Open Settings": "설정",
    "Open Conversation History": "대화 기록",
    "Commands": "명령어",
    "Zoom In": "확대",
    "Zoom in": "확대",
    "Zoom Out": "축소",
    "Zoom out": "축소",
    "Reset Zoom": "원래 크기로",
    "Reset zoom": "원래 크기로",
    "Actual Size": "실제 크기",
    "Actual size": "실제 크기",
    "Files": "파일찾기",
    "File Picker": "파일찾기",
    "File picker": "파일찾기",
    "Open File Picker": "파일찾기",
    "Open file picker": "파일찾기",
    "Minimize": "최소화",
    "minimize": "최소화",
    "Maximize": "최대화",
    "maximize": "최대화",
    "View Usage": "사용량",
    "View usage": "사용량",
    "Usage": "사용량",
    "Gemini Models": "Gemini 모델",
    "Claude and GPT models": "Claude 및 GPT 모델",
    "Weekly Limit Remaining": "주간 남은 한도",
    "Five Hour Limit Remaining": "5시간 남은 한도",
    "Go Back": "이전",
    "Go back": "이전",
    "Go Forward": "다음",
    "Go forward": "다음",
    "General": "일반설정",
    "general": "일반설정",
    "Application": "앱설정",
    "application": "앱설정",
    "Chat Setting": "대화창 세팅",
    "Chat Settings": "대화창 세팅",
    "chat setting": "대화창 세팅",
    "chat settings": "대화창 세팅",
    "Dark Theme": "어두운 테마",
    "Dark theme": "어두운 테마",
    "Light Theme": "밝은 테마",
    "Light theme": "밝은 테마",
    "Theme": "테마",
    "theme": "테마",
    "Remote Control": "리모컨",
    "Remote control": "리모컨",
    "Enable Remote Control": "리모컨 활성화",
    "Version": "버젼",
    "version": "버젼",
    "App version": "앱 버젼",
    "Model & Usage": "모델 및 한도",
    "Models & Usage": "모델 및 한도",
    "Model and Usage": "모델 및 한도",
    "Models and Usage": "모델 및 한도",
    "Plan": "플랜",
    "plan": "플랜",
    "Model Credits": "크레딧사용여부",
    "Model credits": "크레딧사용여부"
};
  const PLACEHOLDERS = {
    "Ask a question, describe a task, or use / for commands": "질문하거나 작업을 설명하세요 (명령어: /)",
    "Ask a question, describe a task, or use / for commands...": "질문하거나 작업을 설명하세요 (명령어: /)...",
    "Search...": "검색...",
    "Search": "검색",
    "Filter...": "필터...",
    "Type a message...": "메시지를 입력하세요...",
    "Add a custom rule...": "사용자 지정 규칙 추가...",
    "Ask anything, @ to mention, / for actions": "무엇이든 물어보세요 (@: 멘션, /: 명령어)",
    "Ask anything, @ to mention, / for commands": "무엇이든 물어보세요 (@: 멘션, /: 명령어)",
    "Ask anything, @ to mention, / for actions...": "무엇이든 물어보세요 (@: 멘션, /: 명령어)...",
    "Ask anything, @ to mention, / for commands...": "무엇이든 물어보세요 (@: 멘션, /: 명령어)..."
};

  const translatedValues = new Set(Object.values(EXACT));
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

  function translateNode(node) {
    if (!node || node.nodeType !== 3) return;
    if (processedNodes.has(node)) return;

    const val = node.nodeValue;
    if (!val) return;
    const trimmed = val.trim();
    if (!trimmed) return;

    // 사이드바의 General은 '일반설정', 앱설정 등 본문 내부의 General은 '일반'
    if (trimmed === 'General' || trimmed === '일반설정') {
      const isSidebarNav = node.parentElement && node.parentElement.closest('[data-testid="settings-nav-item-General"]');
      const targetText = isSidebarNav ? '일반설정' : '일반';
      if (trimmed !== targetText) {
        processedNodes.add(node);
        node.nodeValue = val.replace(trimmed, targetText);
      }
      return;
    }

    if (translatedValues.has(trimmed)) return;

    if (EXACT[trimmed]) {
      processedNodes.add(node);
      node.nodeValue = val.replace(trimmed, EXACT[trimmed]);
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
            if (text === 'General' || text === '일반설정') return NodeFilter.FILTER_ACCEPT;
            if (translatedValues.has(text)) return NodeFilter.FILTER_REJECT;
            if (EXACT[text]) return NodeFilter.FILTER_ACCEPT;
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

    console.log('[Antigravity-i18n] Korean localization active and watching!');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(start, 200));
  } else {
    start();
  }
})();
