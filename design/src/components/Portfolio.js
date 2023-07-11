import '../styles/portfolio.css';
import Blissfulbites from '../styles/pics/Blissfulbites.png';
import Blissfulmobile from '../styles/pics/Blissfulmobile.png';
import Blissfulbites2 from '../styles/pics/Blissfulbites2.png';


const Home = () => {
    return (
        <>
        <body>    
            <div className="home">
               <h1 className="welcomehome">Portfolio</h1> 
               <div className="portfolio-container">
                <div className="wrapper">
                <img src ={Blissfulbites} className="imgportfolio2" alt='' />
               <img src ={Blissfulmobile} className="imgportfolio" alt='' />
               <img src ={Blissfulbites2} className="imgportfolio" alt='' />
               </div>
               </div>
            </div>
            
        </body>
        </>
    )
}

export default Home;