import React from 'react';
import Sidebar from "./Sidebar";
import Header from "./Header";


function App() {


  return (
    <>
    <div className="app-container">
     <Sidebar/> 
     <div className="main-content">
     <Header/>
     </div>
     </div>
    </>
  );
}

export default App
