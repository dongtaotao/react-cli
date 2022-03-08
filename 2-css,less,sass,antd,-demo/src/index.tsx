import React from "react";
import ReactDOM from "react-dom";

import './app.less'

import CssModulesDemo from "./pages/cssModulesDemo";
import LessDemo from "./pages/lessDemo";
import SassDemo from "./pages/sassDemo";
import AntdDemo from "./pages/antdDemo";

const App = () => (
  <>
    <AntdDemo />
    <CssModulesDemo />
    <LessDemo />
    <SassDemo />

  </>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
