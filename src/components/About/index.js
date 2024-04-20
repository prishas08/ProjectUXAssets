import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Loader from 'react-loaders'
import { faAngular, faHtml5, faCss3, faGitAlt, faJsSquare, faReact, } from '@fortawesome/free-brands-svg-icons'


const About = () => {
    return (   
        <>
        <div className='container about-page'>
            <div className="text-zone"> 
                <h1>
                    <p>
                        ABOUT ME
                    </p>
                </h1>
                <p>
                    Hi, my name is Prisha Sharma and I am a very passionate web developer looking for a meaningful role in the IT industry with opportunities to work on the diverse and impactful projects. 
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4B28" />
                    </div>
                </div>
            </div> 
        </div>
        <Loader type="pacman" /> 
        </>
    )
}

export default About
