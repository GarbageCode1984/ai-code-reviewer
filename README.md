# Code Reviewer

로컬에서 실행되는 코드 리뷰 웹 애플리케이션입니다.
Ollama를 활용해 다양한 모델로 코드 분석 결과를 확인할 수 있습니다.

---

## 🚀 Features

* 코드 입력 (Monaco Editor)
* 언어 선택 (JavaScript / TypeScript / Python)
* 로컬 모델 선택 (Ollama 연동)
* 코드 분석 결과 출력
* Markdown 기반 렌더링

---

## 🧠 Tech Stack

* React
* TypeScript
* Vite
* Monaco Editor
* react-markdown
* react-syntax-highlighter
* Ollama

---

## 🖥️ Installation

### 1. Ollama 설치

https://ollama.com

---

### 2. 모델 다운로드

사용 환경(GPU / RAM)에 따라 적절한 모델을 선택해야 합니다.

#### 🟢 가벼운 환경 (저사양 / CPU 사용)

```bash
ollama pull qwen2.5-coder:7b
ollama pull codellama:7b
```

* 빠른 응답 속도
* 낮은 메모리 사용
* 기본적인 코드 리뷰에 적합

---

#### 🟡 중간 사양 (일반 개발 환경)

```bash
ollama pull qwen2.5-coder:14b
ollama pull mistral
```

* 더 나은 코드 이해도
* 속도와 성능 균형

---

#### 🔴 고사양 (GPU 권장)

```bash
ollama pull llama3
```

* 높은 정확도
* 느린 응답 가능
* 충분한 VRAM 필요

---

설치된 모델 확인:

```bash
ollama list
```

👉 앱에서 설치된 모델을 자동으로 불러와 선택할 수 있습니다.

---

### 3. Ollama 실행

```bash
ollama serve
```

---

### 4. 프로젝트 실행

```bash
npm install
npm run dev
```

---

## 📌 Requirements

* Ollama가 실행 중이어야 합니다.
* 기본 API 주소: http://localhost:11434

---

## 🎯 Current Status

* 핵심 기능 구현 완료
* 모델 동적 선택 지원
* 실사용 가능한 UI 구성

---

## 🧾 Summary

로컬 환경에서 실행되며,
사용자의 환경에 맞는 모델을 선택해 코드 분석 결과를 확인할 수 있는 웹 애플리케이션입니다.

---

## 🪪 License

MIT
