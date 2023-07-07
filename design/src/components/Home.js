import '../styles/home.css';
import kep5 from '../styles/pics/kep5.jpg';
import contact2 from '../styles/pics/contact2.jpg';
import kep1 from '../styles/pics/kep1.jpg';
import kep2 from '../styles/pics/kep2.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <body>  
            <div className="big-container"> 
            <Link to="/portfolio"><img src ={kep5} className="homepics" alt='' /></Link>
            <Link to="/contact"><img src ={contact2} className="homepics" alt='' /></Link>
            <Link to="/about"><img src ={kep1} className="homepics" alt='' /></Link>
            <Link to="/about"><img src ={kep2} className="lasthomepics" alt='' /> </Link>
        </div>
        </body>
        </>
    )
}

export default Home;