import '../styles/portfolio.css';
import Blissfulbitesfigma from '../styles/pics/Blissfulbitesfigma.png';
import Blissfulmobilesmall from '../styles/pics/Blissfulmobilesmall.png';
import Desktopsmall from '../styles/pics/Desktopsmall.png';


const Home = () => {
    return (
        <>
        <body>    
            <div className="home">
               <h1 className="welcomehome">Portfolio</h1> 
               <div className="portfolio-container">
                <div className="wrapper">
                <img src ={Blissfulbitesfigma} className="imgportfolio" alt='' />
               <img src ={Blissfulmobilesmall} className="imgportfolio" alt='' />
               <img src ={Desktopsmall} className="imgportfolio2" alt='' />
               </div>
               </div>
            </div>
            
        </body>
        </>
    )
}

export default Home;