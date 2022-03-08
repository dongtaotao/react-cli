import React from "react";
import ReactDOM from "react-dom";

// const a = 'a';

// const b = 'b';

const App = () => <h1>aaaMy React and TypeScript App!{new Date().toLocaleDateString()}</h1>;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
