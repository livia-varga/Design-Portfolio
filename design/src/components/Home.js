import '../styles/home.css';
import small3 from '../styles/pics/small3.jpg';
import small1 from '../styles/pics/small1.jpg';
import small2 from '../styles/pics/small2.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <body>
                <div className="big-container">
                    <div className='small-container'>
                    <Link to="/portfolio"><img src={small3} className="homepics" alt='' /></Link>
                    <Link to="/portfolio" className="portfolio-text">Portfolio</Link>
                    </div>
                    <div className='small-container'>
                    <Link to="/contact"><img src={small1} className="homepics" alt='' /></Link>
                    <Link to="/contact" className="portfolio-text">Contact</Link>
                    </div>
                    <div className='small-container'>
                    <Link to="/about"><img src={small2} className="homepicslast" alt='' /></Link>
                    <Link to="/about" className="portfolio-text">About</Link>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Home;