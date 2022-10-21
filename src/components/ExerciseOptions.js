import Gifs from '../assets/Gifs'
import WorkoutSect from './WorkoutSect'
import { useState } from 'react'
import Alert from './Alert'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link  } from 'react-router-hash-link'


const ExerciseOptions = (prop) => {
    
    const [exerciseOptions, setExerciseOptions ] = useState(Gifs);
    const [selectedExercises, setSelectedExercises ] = useState([]);
    const [alert, setAlert] = useState(false)
    
    const onClick = (exercise) => {
        const optionsArray = [...exerciseOptions] 
        const selectedArray = [...selectedExercises] 
  
        if (selectedExercises.length < 5){
            selectedArray.push(exercise)
            setSelectedExercises(selectedArray)  
            
            // first option
            const removedArray = optionsArray.filter(item => item != exercise)
            setExerciseOptions(removedArray)
            
            // second option
            // let index = optionsArray.indexOf(exercise)
            // optionsArray.splice(index, 1)
            // setExerciseOptions(optionsArray)

        }else {
            setAlert(true)
            // console.log('ONLY PICK 5')
        }  
    }

    return (
        <>
            { selectedExercises.length < 5 ?
                <section id='exerciseOptions'>
                    <div className='wrapper' >
                        <h2>Please Choose Only 5 Exercises!</h2>
                        <ul className='exercise-container' >
                            {exerciseOptions.map((exercise => {
                                return (
                                    <li onClick={() => onClick(exercise)}>
                                        <div key=''> 
                                            {exercise.substring(16).replaceAll('-', ' ').split('.')[0]}
                                            <img src={ exercise }  alt={exercise.substring(16).replaceAll('-', ' ').split('.')[0]}/>
                                        </div>
                                    </li>
                                )
                            }))}
                        </ul>
                    </div>
                </section>
              :
                <section id='exerciseOptions'>
                    <div className='wrapper' >
                        <h2>Please Choose Only 5 Exercises!</h2>
                        <ul className='exercise-container' >
                            {exerciseOptions.map((exercise => {
                                return (
                                    <li onClick={() => onClick(exercise)}>
                                        <Link to="#workout-sect" smooth>
                                        <div key=''> 
                                            {exercise.substring(16).replaceAll('-', ' ').split('.')[0]}
                                            <img src={ exercise }  alt={exercise.substring(16).replaceAll('-', ' ').split('.')[0]}/>
                                        </div>
                                        </Link>
                                    </li>
                                )
                            }))}
                        </ul>
                    </div>
                </section>
            }
            < Alert alert={alert} setAlert={setAlert} alertMessage={'Sorry you can only select 5 exercises!'}/>
            < WorkoutSect exerciseOptions={exerciseOptions} setExerciseOptions={setExerciseOptions}  selectedExercises={selectedExercises} setSelectedExercises={setSelectedExercises} selectedRep={prop.selectedRep} toggleRep={prop.toggleRep} />
              
        </>
    )
}

export default ExerciseOptions;


   