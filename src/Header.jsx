import React from 'react';
import RealTimeClock from './RealTimeClock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Header(){
    return(

        <div className="header">

            <div>
              <h1>Good Morning, Team!</h1>
              <p>It's Friday, 4 October 2024</p>
            </div>

           
            
             <div className="time-settings">
                <RealTimeClock/>
          
            <button className="settings-icon">
            <FontAwesomeIcon icon={faUserCircle} size="2x" className="profile-icon" />
            </button> 
            </div>

           
        </div>
    );
}

export default Header;