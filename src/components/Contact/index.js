import './index.scss'
import Loader from 'react-loaders'

const Contact = () => {
    return ( 
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
            <h1>
                    <p>
                        CONTACT ME
                    </p>
                </h1>
            <p>
                I am interested in internship opportunities in the field of CS - especially ambitious or large projects. If you believe you have an opportunity for me, feel free to contact me with the button below!
            </p>
            <p>
                <a href="mailto:prishas08@gmail.com">Email Me</a>
            </p>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact 