import React from 'react';




function Home(){
    return (
      <div>
        <div className='todays-task-card'>
            <h4>Today's Task</h4>
            <button className="btn-schedule">Today's schedule</button>
        </div>
       

        <div className='home-part'>
            <div className="card">
                <h5>Total Tasks</h5>
            </div>

            <div className="card">
                <h5>Ongoing Tasks</h5>
            </div>

            <div className="card">
                <h5>Completed Tasks</h5>
            </div>

            <div className="card">
                <h5>Overdue Tasks</h5>
            </div>



        </div>

         
        </div>
    );

}

export default Home;