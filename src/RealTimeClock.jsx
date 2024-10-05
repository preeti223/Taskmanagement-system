import React, { useState, useEffect } from 'react';

function RealTimeClock(){
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
    return () => clearInterval(timer);
}, []);

const formattedTime = currentTime.toLocaleTimeString('en-US',{
    hour: '2-digit',
    minute: '2-digit',

    hour12: true,
});

return(
    <div className="real-time-clock">
        <span>{formattedTime}</span>
    </div>
);

    }
export default RealTimeClock;2