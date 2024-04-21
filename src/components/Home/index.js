import {Link} from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-n.png'
import './index.scss';

const Home = () => {
    return(
        <div className = 'container home-page'>
            <div className = 'text-zone'>
                <h1>Hi! <br /> I'm
                <br />
                Nikita
                </h1>
                <h2> Texas A&M Engineering Honors</h2>
                <br />
                <br />
                <Link to = '/contact' className = 'flat-button' > CONTACT ME </Link>
            </div>
        </div>
    );
}

export default Home

