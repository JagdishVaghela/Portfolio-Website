import {Link} from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import { useState } from 'react'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['J', 'a', 'g', 'd', 'i', 's', 'h']
    const positionArray = ['A', 's', 'p', 'i', 'r', 'i', 'n', 'g', ' ', 'C', 'y', 'b', 'e', 'r', 'S', 'e', 'c', 'u', 'r', 'i', 't', 'y', ' ', 'A', 'n', 'a', 'l', 'y', 's', 't']



    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                {/* This image does not load */}
                {/* <img scr={LogoTitle} alt='delevoper'/>  */}
                
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={positionArray} idx={22}/>
                </h1>
                <h2>Computer Science Student</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}
    
export default Home