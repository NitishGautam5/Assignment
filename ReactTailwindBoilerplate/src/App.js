import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  const [show, setShow] = useState(true);

  const toggleSidebar = () => {
    setShow(!show);
  };

  return (
    <div className="">
      <Header />
      <div className="flex">
        <button onClick={toggleSidebar} className="absolute top-0 z-10 px-4 py-1 bg-sky-700 rounded">
          {show ? "Hide bar ⬇️" : "Show bar➡️"}
        </button>
        
          {show && <Sidebar />}
       
        <div className={` relati transition-transform duration-300 flex-1 ${show ? "ml-0" : "ml-l0"}`}>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
