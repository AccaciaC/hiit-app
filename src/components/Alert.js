
const Alert = (prop) =>{
    return ( 
        <>
            { prop.alert ? 
                <div className="popup">
                    <div className="inner">
                        {prop.alertMessage}
                            <span onClick={() => prop.setAlert(false)  } className="button">
                                Got it!
                            </span>
                    </div>
                </div>
                : ''
            }
        </>
    )
}
export default Alert;