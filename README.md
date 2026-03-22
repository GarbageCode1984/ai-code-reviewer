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
### 🟢 가벼운 환경 (CPU 또는 저사양 GPU)

* 권장 사양:

  * GPU 없음 또는 VRAM 6GB 이하

* 추천 모델:

  * qwen2.5-coder:7b
  * codellama:7b

* 특징:

  * CPU에서도 실행 가능
  * 비교적 빠른 응답 속도
  * 간단한 코드 분석에 적합

---

### 🟡 일반 개발 환경 (중간 사양 GPU)

* 권장 사양:

  * VRAM 6GB ~ 12GB

* 추천 모델:

  * qwen2.5-coder:14b
  * mistral

* 특징:

  * 코드 이해도 향상
  * 속도와 성능의 균형
  * 실사용에 적합한 수준

---

### 🔴 고사양 환경 (고성능 GPU)

* 권장 사양:

  * VRAM 12GB 이상

* 추천 모델:

  * llama3

* 특징:

  * 높은 정확도
  * 복잡한 코드 분석에 유리
  * 응답 속도는 상대적으로 느릴 수 있음

---

> 모델 크기가 클수록 더 정확하지만, 더 많은 메모리와 시간이 필요합니다.


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
