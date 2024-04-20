import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-p.png'
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer" />
                risha
                <br />
                Web Developer
                </h1>
                <h2>Texas A&M Engineering Student/Proffiecent in Java and Python/JS instructor</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home