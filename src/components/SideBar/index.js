import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoP from '../../assets/images/logo-p.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faG, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SideBar = () => (
	<div className = 'nav-bar'>
		<Link className = 'logo' to = '/'>
			<img src = {LogoP} alt = "logo" />
			<img className = 'sub-logo' src = {LogoSubtitle} alt = "prisha" />
		</Link>
        <nav>
            <NavLink exact="true" acticeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" acticeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" acticeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/prisha-sharma-915870266/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="4d4d4de" />
                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/prishas08"
                >
                    <FontAwesomeIcon icon={faGithub} color="4d4d4de" />
                </a>
            </li>
        </ul>

	</div>
)


export default SideBar