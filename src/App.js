import React from "react";
import "./styles/tailwind.output.css";

function App() {
  return (
    <div className="h-screen w-screen m-0 p-0 flex flex-col justify-center items-center space-y-4">
      <div className="text-5xl font-bold">Hello World!</div>
      <div className="text-2xl text-gray-800">
        A TailwindCSS-React Boilerplate created by{" "}
        <a href="https://github.com/tgashwinkumar" className="text-blue-300">
          @tgashwinkumar
        </a>
        .
      </div>
    </div>
  );
}

export default App;
