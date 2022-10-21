import warningLabel from '../assets/notification-warning_114460.png'

const Alert = (prop) =>{
    return ( 
        <>
            { prop.alert ? 
                <div className="popup">
                    <div className="inner">
                        <div className="warning-label">
                            <img src={warningLabel} alt="warning label" />
                        </div>
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