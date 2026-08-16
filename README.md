# Upstage AI Bootcamp Tech Blog Archive

커널 아카데미 AI 부트캠프 24기에서 학습하고 프로젝트에 적용한 내용을 정리한 개인 기술 블로그입니다.

**[기술 블로그 바로가기](https://aibc24-hwirim.github.io/romeo.hseo.github.io/)**

## 기록 내용

Python과 컴퓨터공학 기초부터 머신러닝, MLOps, 컴퓨터 비전, 자연어 처리, 정보 검색, RAG, LangChain, 추천 시스템까지 총 15개의 글을 담고 있습니다. 강의 내용을 옮기는 데 그치지 않고 직접 실습하고 프로젝트를 진행하며 겪은 시행착오와 배운 점을 중심으로 기록했습니다.

경진대회 글은 이후 참가자의 학습 경험을 해치지 않도록 구체적인 설정값과 해법은 공개하지 않았으며, 문제를 바라본 과정과 프로젝트를 통해 얻은 교훈을 중심으로 작성했습니다.

## 사이트 기능

- 제목·카테고리·요약·본문 검색
- 프로젝트·경진대회, Python·CS·Git, NLP·LLM, 회고 주제별 필터
- 글마다 구분된 고유 URL과 작성 일시 표시
- 이전·다음 글 이동과 코드 블록 복사
- 모바일 화면 대응

## 프로젝트 구조

- `index.html`: 전체 글 목록과 검색·필터 화면
- `posts/`: 15개의 개별 포스팅 페이지
- `assets/js/techBlogData.js`: 제목, 작성 일시, 본문과 이미지 경로를 포함한 글 데이터
- `assets/js/app.js`: 목록 검색과 필터
- `assets/js/article.js`: 개별 글 렌더링과 이전·다음 글 이동
- `assets/css/blog.css`: 공통 스타일
- `assets/images/`: 실습 및 프로젝트 이미지

별도의 빌드 과정 없이 HTML, CSS, JavaScript로 구성했으며 GitHub Pages에서 배포합니다.

## 로컬 실행

Python 3가 설치된 환경에서 다음 명령을 실행합니다.

```bash
python -m http.server 8000
```

브라우저에서 `http://localhost:8000`으로 접속합니다.

## 배포

GitHub Pages의 배포 소스는 `main` 브랜치의 `/(root)`입니다.

## License

[MIT License](LICENSE)
