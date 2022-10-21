import headerImage from '../assets/header-image.png'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link  } from 'react-router-hash-link'

const Header = ()=> {
    return (
        <header>
            <div className="wrapper header-container">
                <div className="intro-container">
                    <div className="intro">
                        <h1>Got Five Minutes?</h1>
                        <p>Get a quick workout in during your BREAK! <br /> You have 5 minutes to complete the set! Are you up for the Challenge?</p>
                        <Link to="#chooseRepSect" smooth>
                            <span className='button'>Start!</span>   
                        </Link>                
                    </div>
                </div>
                <div className="header-image"> 
                    <img src={headerImage} alt="cartoon image of four people working out at a gym"/>
                </div>
            </div>
        </header>
    )
}
export default Header;