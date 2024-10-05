import React from 'react';

function Sidebar(){

    return(
        <div className="sidebar">
          

           <div className="menu">
           <h2>Pegasus</h2>
           <ul>
           <li><a href="/home">Home</a></li>
           <li><a href="/Calender">Calender</a></li>
           <li><a href="/Project Due Date">Project Due Date</a></li>
           <li><a href="/New Task">New Task</a></li>
           <li><a href="/Lists">Lists</a></li>
           <li> <a href="/Profile">Profile</a></li>
           </ul>
           </div>
              <div>
              <button className="logout-button">Logout</button>
              </div>
         </div>
       
    );

}
export default Sidebar;