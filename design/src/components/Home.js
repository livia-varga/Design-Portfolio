import '../styles/home.css';
import portfoliopagefigma from '../styles/pics/portfoliopagefigma.png';
import Contactpagefigma from '../styles/pics/Contactpagefigma.png';
import aboutpagefigma from '../styles/pics/aboutpagefigma.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <body>
                <div className="big-container">
                    <div className='small-container'>
                    <Link to="/portfolio"><img src={portfoliopagefigma} className="homepics" alt='' /></Link>
                    <Link to="/portfolio" className="portfolio-text">Portfolio</Link>
                    </div>
                    <div className='small-container'>
                    <Link to="/contact"><img src={Contactpagefigma} className="homepics" alt='' /></Link>
                    <Link to="/contact" className="portfolio-text">Contact</Link>
                    </div>
                    <div className='small-container'>
                    <Link to="/about"><img src={aboutpagefigma} className="homepicslast" alt='' /></Link>
                    <Link to="/about" className="portfolio-text">About</Link>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Home;