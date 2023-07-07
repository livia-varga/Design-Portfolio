import '../styles/portfolio.css';
import Portfolio2 from '../styles/pics/Portfolio2.png';


const Home = () => {
    return (
        <>
        <body>    
            <div className="home">
               <h1 className="welcomehome">Portfolio</h1> 
               <div className="portfolio-container">
                <div className="wrapper">
               <img src ={Portfolio2} className="imgportfolio" alt='' />
               <div className="color-box"></div>
               <div className="color-box"></div>
               <img src ={Portfolio2} className="imgportfolio" alt='' />
               <img src ={Portfolio2} className="imgportfolio" alt='' />
               <div className="color-box"></div>
               </div>
               </div>
            </div>
            
        </body>
        </>
    )
}

export default Home;