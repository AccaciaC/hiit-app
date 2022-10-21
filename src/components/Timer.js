import {useState, useEffect} from 'react'
import Alert from './Alert'

const Timer = (prop) => {

    const [time, setTime] = useState(0)
    const [timerOn, setTimeOn] = useState(false)
    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    useEffect(()=>{
        let interval = null

        if(timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)

        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)

    },[timerOn]) 

    const startBtn = () => {
        if ( prop.selectedExercises.length == 5  && prop.toggleRep){
            setTimeOn(true)
        } else if (prop.selectedExercises.length != 5  && !prop.toggleRep) {
            setAlert(true)
            setAlertMessage('Please select REPS and 5 exercises!')
        }else if (prop.selectedExercises.length != 5){
            setAlert(true)
            setAlertMessage('Please choose exercises!')
        }else{
            setAlert(true)
            setAlertMessage('Please select REPS!')
        }
    }

    return (
        <>
            <div className='container-timer'>
                <div>
                    <span className='time'>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span className='time'>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
                </div>
                <div>
                    {!timerOn && time == 0 && (
                        <a className='button' onClick={()=> startBtn()}> Start</a>
                    )}
                    {timerOn && (
                        <a className='button' onClick={()=> setTimeOn(false)}> Pause</a>
                    )}

                    {!timerOn && time > 0 && (
                        <a className='button' onClick={()=> setTimeOn(true)}> Resume</a>
                    )}

                    {!timerOn && time > 0 && (
                        <a className='button' onClick={()=> setTime(0)}> Reset</a>
                    )}
                </div>
            </div>   
            < Alert alert={alert} setAlert={setAlert} alertMessage={alertMessage}/>
        </>
    )
}

export default Timer;