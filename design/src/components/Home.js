import '../styles/home.css';
import kep5 from '../styles/pics/kep5.jpg';
import contact2 from '../styles/pics/contact2.jpg';
import kep1 from '../styles/pics/kep1.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <body>
                <div className="big-container">
                    <div className='small-container'>
                    <Link to="/portfolio"><img src={kep5} className="homepics" alt='' /></Link>
                    <Link to="/portfolio" className="portfolio-text">Portfolio</Link>
                    </div>
                    <div className='small-container'>
                    <Link to="/contact"><img src={contact2} className="homepics" alt='' /></Link>
                    <Link to="/contact" className="portfolio-text">Contact</Link>
                    </div>
                    <div className='small-container'>
                    <Link to="/about"><img src={kep1} className="homepicslast" alt='' /></Link>
                    <Link to="/about" className="portfolio-text">About</Link>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Home;