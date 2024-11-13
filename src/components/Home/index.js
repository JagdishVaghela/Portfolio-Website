import {Link} from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm Jagdish
                {/* This image does not load */}
                {/* <img scr={LogoTitle} alt='delevoper'/>  */}
                
                <br/>
                Aspiring CyberSecurity Analyst
                </h1>
                <h2>Computer Science Student</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    );
}
    
export default Home