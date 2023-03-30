import React from 'react'
import { useTimer } from 'react-timer-hook'

function Timer({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        hours
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (
        <div className="timer timer-big">
            <div className="timer__item">
                {hours}
                <span>soatlar</span>
            </div>
            <div className="timer__item">
                {minutes}
                <span>daqiqalar</span>
            </div>
            <div className="timer__item">
                {seconds}
                <span>soniyalar</span>
            </div>
        </div>
    )
}

export default Timer