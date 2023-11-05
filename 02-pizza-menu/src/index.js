import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <div>Hello</div>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
