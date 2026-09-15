# Google Antigravity 에코시스템 통합 한글 패치 🇰🇷
> **Google Antigravity 2.0(데스크톱 앱)** 및 **Antigravity IDE(VS Code 기반)**를 모두 지원하는 비침습적 오픈소스 한글 패치 프로젝트입니다.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Windows-0078D6.svg)](https://github.com/hermits-diner)
[![Antigravity](https://img.shields.io/badge/Antigravity-2.0%20%26%20IDE-orange.svg)](https://antigravity.google)

---

## ✨ 주요 특징

1. **Antigravity 2.0 & Antigravity IDE 동시 지원 (`install.bat`)**
   - **Antigravity 2.0**: 데스크톱 앱 네이티브 메뉴 및 채팅 화면 전체 UI 한글화
   - **Antigravity IDE**: 한국어 언어 로캘 자동 세팅 및 사이드바 AI 패널(Cascade) 실시간 한글화
   - 별도의 개발 도구(Python, Node.js 등) 없이 배치 파일 실행 한 번으로 자동 감지 및 설치 완료

2. **1초 원클릭 원본 복원 (`uninstall.bat`)**
   - 패치 전 최초의 `app.asar`를 자동으로 안전 백업(`app.asar.original.bak`)
   - 마음에 들지 않거나 문제 발생 시 언제든 클릭 한 번으로 완전 원상 복구

3. **100% 안전한 비침습적(Non-invasive) 구조**
   - **코딩 영역 보호**: Monaco 코드 에디터, xterm 터미널, 마크다운 코드 블록 등 개발/코딩 관련 영역은 번역에서 완벽히 제외되어 AI 에이전트 작업에 일체 영향을 주지 않습니다.
   - 텍스트 노드 단위의 정밀 치환으로 React DOM Fiber 트리가 깨지지 않습니다.

4. **상단 메뉴바 & 툴팁 완벽 지원**
   - 파일, 보기, 창크기 등 상위 메뉴는 물론 하위 서브메뉴(확대, 축소, 원래 크기로, 전체 화면 전환 등)까지 재귀 번역
   - 버튼 `aria-label` 및 툴팁(`data-tooltip`)까지 세심하게 지원

5. **AI 에이전트 한국어 전역 규칙(Global Rules) 자동 설정**
   - UI 한글화뿐만 아니라, AI 에이전트가 항상 **한국어로 대화**하고, 생성/수정하는 코드의 **주석 및 docstring을 한국어로 작성**하며, **기술 용어를 병기**하도록 전역 규칙(`~/.gemini/GEMINI.md`)을 원클릭으로 자동 구성합니다.

6. **누구나 쉽게 기여 가능한 사전 기반 구조**
   - 단어 추가를 위해 복잡한 소스코드를 수정할 필요 없이, [`korean_dict.json`](korean_dict.json) 파일에 원하는 단어만 추가하여 Pull Request(PR)를 보낼 수 있습니다.

---

## 🚀 빠른 시작 (일반 사용자)

### 1. 다운로드
[**Releases 탭**](../../releases)에서 최신 버전의 `Antigravity-Korean-Patch.zip`을 다운로드하고 압축을 풉니다.

### 2. 설치
1. `install.bat` 파일을 더블 클릭하여 실행합니다.
2. 자동으로 원본 백업 후 한글 패치가 적용됩니다.
3. 완료 메시지가 뜨면 `Y`를 눌러 Antigravity를 실행합니다.

### 3. 삭제 및 원본 복구
- 패치를 삭제하고 최초 상태로 되돌리려면 `uninstall.bat`을 실행하기만 하면 됩니다.

---

## 🛠️ 번역 사전 기여하기 (Contributing)

이 프로젝트는 오픈소스로 운영되며, 여러분의 번역 제안과 기여를 언제나 환영합니다!

1. 저장소를 Fork합니다.
2. [`korean_dict.json`](korean_dict.json) 파일을 열어 번역하고자 하는 문구를 추가합니다.
   ```json
   {
     "exact": {
       "영문 문구": "한국어 번역"
     },
     "placeholders": {
       "입력창 placeholder": "한국어 placeholder"
     }
   }
   ```
3. 변경 사항을 커밋하고 Pull Request(PR)를 생성해 주세요.

---

## ❓ 자주 묻는 질문 (FAQ)

#### Q. Antigravity가 업데이트되었더니 한글 패치가 풀렸어요.
- Antigravity 앱 자체 업데이트 시 `app.asar`가 Google 공식 새 버전으로 교체되기 때문입니다.
- 업데이트 완료 후 `install.bat`을 다시 한 번 실행해 주시면 즉시 한글 패치가 재적용됩니다.

#### Q. 보안 경고(Windows Defender 등)가 발생하나요?
- 이 패치는 오픈소스로 모든 코드가 투명하게 공개되어 있으며, 악성 코드나 외부 네트워크 통신을 포함하지 않습니다.
- 윈도우 SmartScreen 경고가 뜰 경우 `추가 정보` -> `실행`을 누르시면 됩니다.

---

## 📄 라이선스
이 프로젝트는 [MIT License](LICENSE)를 따릅니다.
Google Antigravity는 Google LLC의 등록 상표입니다. 본 프로젝트는 공식 Google 제품이 아닌 비공식 커뮤니티 오픈소스 프로젝트입니다.
