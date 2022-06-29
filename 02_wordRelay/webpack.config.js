const path = require("path"); // 경로 쉽게 조작하도록 기본모듈

module.exports = {
  name: "wordrelay-setting", // 이름
  mode: "development", // 실서버스에서는 production으로 변경
  devtool: "eval", // 빠르게 하겠다 라는 것
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // 중요
  // 입력
  entry: {
    //app: ["./client.jsx", "./WordRelay.jsx"],
    // client.jsx에서 WordRelay.jsx를 불러오는데 이런걸 다 웹팩이 파악하기 떄문에 적어줄 필요없음
    // 확장자 같은경우는 나중에 엔트리가 많아질수있늗네(json, js, css) => 확장자 입력하기 귀찮으면 resolve추가
    // 알아서 그 안에 들어있는 확장자가 있는지 확인함
    app: ["./client.jsx"],
  },
  // 출력
  output: {
    // 설정을 복잡하게 보여드릴려고 dist라는 폴더를 추가함
    path: path.join(__dirname, "dist"), // 현재 폴더 경로랑 dist랑 합쳐줌 => 경로 C:\users\lome\react\killReact\WORDRELAY\dist
    filename: "app.js",
  },
};

// 터미널에 webpack치면 다됨

// webpack은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다. => 명령어 등록 필요
//
