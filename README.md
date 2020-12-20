# 202012704 이우진 2학기 기말과제

React를 이용한 간단한 구구단 정답 맞추기 게임입니다.

프로젝트를 다운받은 후 터미널에서 npx webpack로 구동시킵니다.

로컬웹에서 재미있게 구구단 게임 즐깁니다.

# 실행 동영상 다운로드
https://user-images.githubusercontent.com/48529156/102712478-00aa7280-4305-11eb-8312-b4936976bce9.mov

# 게임 설명
1 * 1의 답을 적고 Insert 버튼을 눌러줍니다.

![스크린샷 2020-12-20 오후 8 19 31](https://user-images.githubusercontent.com/48529156/102711955-d22a9880-4300-11eb-85df-33283e389115.png)

정답이면 다음 문제로 넘어갑니다. 아래에 이전 문제의 답이 표시됩니다. 1 Correct

![스크린샷 2020-12-20 오후 8 19 41](https://user-images.githubusercontent.com/48529156/102711959-d8207980-4300-11eb-82d1-6711f6810129.png)

오답이면 다음 문제로 넘어가지 못합니다. 아래에 답으로 적었던 오답 4 Wrong 표시됩니다.

![스크린샷 2020-12-20 오후 8 19 52](https://user-images.githubusercontent.com/48529156/102711961-db1b6a00-4300-11eb-9339-42c1b608eed6.png)

# 사용 모듈
- $ npm i react react-dom
- npm i -D webpack webpack-cli
- npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react

*@babel/core: 기본적인 babel 최신 문법 전환

*@babel/preset-env: 옛날 브라우저 지원

*@babel/preset-react: 리 엑트 코드 변환

*babel-loader: babel, webpack 연결

# 코드 구성
- Class
