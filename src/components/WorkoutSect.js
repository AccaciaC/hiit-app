import Timer from './Timer'
import Footer from './Footer'


const SelectedExercises = (prop) => {
    const handleDelete = (exerciseSelected) => {   
        const optionsArray = [...prop.exerciseOptions] 
        const selectedArray = [...prop.selectedExercises]

        let index = selectedArray.indexOf(exerciseSelected)
        selectedArray.splice(index, 1)
        prop.setExerciseOptions(selectedArray)
        
        optionsArray.push(exerciseSelected)
        prop.setSelectedExercises(selectedArray)   
        prop.setExerciseOptions(optionsArray)
        prop.setSelectedExercises(selectedArray)        
    }

    return(
    <>
        <section className='workout-sect' id='workout-sect'>
            <div className="wrapper">
                <h2>Your Workout</h2>
                <div className='workout-container'>
                    <div className="workout-exercises">
                        <span className='reps'>
                            {prop.selectedRep} Reps of:
                        </span>
                        <div>
                            <ul>
                                {prop.selectedExercises.map((exerciseSelected => {
                                    return (
                                        <li onClick = { () => handleDelete(exerciseSelected)}>
                                            <div>                                 
                                                {exerciseSelected.substring(25).replaceAll('-', ' ').split('.')[0]}
                                            
                                                <img src={exerciseSelected}
                                                className='selected'  alt={exerciseSelected.substring(25).replaceAll('-', ' ').split('.')[0]}/>
                                            </div>
                                        </li>
                                        )
                                }))}
                            </ul>
                        </div>
                    </div>
                    < Timer selectedRep={prop.selectedRep} selectedExercises={prop.selectedExercises} toggleRep={prop.toggleRep} />
                </div>
            </div>
        </section>
        < Footer />
    </>
       
    )
}

export default SelectedExercises;