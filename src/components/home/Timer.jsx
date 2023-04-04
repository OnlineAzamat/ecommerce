import React, { useEffect } from 'react'

function Timer() {
    const countdown = () => {
        const countDate = new Date("Aprel 11, 2023 09:00:00").getTime();
        const now = new Date().getTime();
        const gap = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        return(
            <>
                <div className="timer__item">
                    {textDay}
                    <span>kunlar</span>
                </div>
                <div className="timer__item">
                    {textHour}
                    <span>soatlar</span>
                </div>
                <div className="timer__item">
                    {textMinute}
                    <span>daqiqalar</span>
                </div>
                <div className="timer__item">
                    {textSecond}
                    <span>soniyalar</span>
                </div>
            </>
        )
    }

    return (
        <div className="timer timer-big">
            {
                countdown()
            }
        </div>
    )
}

export default Timer