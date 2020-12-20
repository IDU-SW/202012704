const path = require('path');

module.exports = {
  mode: 'development', // 배포시: production
  devtool: 'eval', // (빠르게 하겠다) 배포시: hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'] // .js 또는 .jsx 파일을 찾는다 (entry 안에 app에 있는 파일에 확장자를 붙여서 찾는다)
  },

  entry: {
    app: ['./client']
  }, // 입력
  module: {
    rules: [{
      test: /\.jsx?$/, // .js 파일과 .jsx 파일에 rules (loader)를 적용
      loader: 'babel-loader', // babel 적용: 최신문법을 옛날 브라우저에서도 돌아갈 수 있게 변경하겠다.
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties'] // Error fix
      },
    }]
  }, // entry에 파일을 읽고 거기에 module를 적용한 후 output에 뺸다.
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist') // 현재 폴더 루트(__dirname) 에 'dist' 폴더 생성
  }, // 출력

};