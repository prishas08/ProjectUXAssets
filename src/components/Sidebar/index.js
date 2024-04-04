import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoN from '../../assets/images/logo-initials.png'
import LogoSubtitle from '../../assets/images/logo-n2.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className = 'logo' to = '/'>
            <img src = {LogoN} alt = "logo" />
            <img className = 'sub-logo' src = {LogoSubtitle} alt = "nikita" /> 
        </Link>

        <nav>
            <NavLink exact = "true" activeclassname = "active" to = "/">
                <FontAwesomeIcon icon = {faHome} color = '#F1F3DD'/>
            </NavLink>

            <NavLink exact = "true" activeclassname = "active" className = "about-link" to = "/about">
                <FontAwesomeIcon icon = {faUser} color = '#F1F3DD'/>
            </NavLink>

            <NavLink exact = "true" activeclassname = "active" className = "contact-link" to = "/contact">
                <FontAwesomeIcon icon = {faEnvelope} color = '#F1F3DD'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target = "_blank"
                    rel = "noreferer"
                    href = "https://www.linkedin.com/in/nikita-kelwada/"
                >
                    <FontAwesomeIcon icon = {faLinkedin} color = "#F1F3DD" />   
                </a>
            </li>                       
            <li>
                <a
                    target = "_blank"
                    rel = "noreferer"
                    href = "https://github.com/nikitakelwada"
                >
                    <FontAwesomeIcon icon = {faGithub} color = "#F1F3DD" />  
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar