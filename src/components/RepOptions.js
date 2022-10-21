
import ExerciseOptions from "./ExerciseOptions"
import {useState, useEffect} from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link  } from 'react-router-hash-link'

const RepDuration = () => {

    const [selectedRep, setSelectedRep] = useState('')
    const [toggleRep, setToggleRep] = useState(false)

    const onClick = (rep) => {
        const repChange = rep
        setSelectedRep(repChange)
        setToggleRep(true)
    }

    return (
        <>
            <section className="chooseRepSect" id="chooseRepSect">
                <div className="wrapper chooseRepContainer">
                    <h2>Choose Your REPS</h2>
                    <div className="chooseRepOptions">
                        <Link to='#exerciseOptions' smooth>
                            <span onClick={()=>onClick('15')} className="button">
                                15 Reps
                            </span>
                        </Link>
                        <Link to='#exerciseOptions' smooth>
                            <span onClick={()=>onClick('20')} className="button">
                                20 Reps
                            </span>
                        </Link>
                        <Link to='#exerciseOptions' smooth>
                            <span onClick={()=>onClick('25')} className="button">
                                25 Reps
                            </span>
                        </Link>
                        <Link to='#exerciseOptions' smooth>
                            <span onClick={()=>onClick('30')} className="button">
                                30 Reps
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
            <ExerciseOptions selectedRep={selectedRep} toggleRep={toggleRep} />
        </>
    )
}

export default RepDuration;