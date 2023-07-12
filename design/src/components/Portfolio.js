import '../styles/portfolio.css';
import Blissfulbitesfigma from '../styles/pics/Blissfulbitesfigma.png';
import Blissfulmobile2 from '../styles/pics/Blissfulmobile2.png';
import new2 from '../styles/pics/new2.png';


const Home = () => {
    return (
        <>
        <body>    
            <div className="home">
               <h1 className="welcomehome">Portfolio</h1> 
               <div className="portfolio-container">
                <div className="wrapper">
                <img src ={Blissfulbitesfigma} className="imgportfolio" alt='' />
               <img src ={Blissfulmobile2} className="imgportfolio" alt='' />
               <img src ={new2} className="imgportfolio2" alt='' />
               </div>
               </div>
            </div>
            
        </body>
        </>
    )
}

export default Home;