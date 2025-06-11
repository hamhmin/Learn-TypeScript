import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import _ from "lodash";

// "_esModuleInterop": "true =  import할때 파일 내에 default로 export한게 없어도 가져올 수 있도록 해줌"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
