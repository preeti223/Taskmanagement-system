import React from 'react';
import Sidebar from "./Sidebar";
import Header from "./Header";
import Home from "./Home";
import UpcomingTasks from './upcomingtasks';


function App() {


  return (
    <>
    <div className="app-container">
     <Sidebar/> 
     <div className="main-content">
     <Header/>
     <Home/>
     <UpcomingTasks/>
     
     </div>
     </div>
    </>
  );
}

export default App
