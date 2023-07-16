import '../styles/portfolio.css';
import Blissfulbitesfigma from '../styles/pics/Blissfulbitesfigma.png';
import Blissfulmobilesmall from '../styles/pics/Blissfulmobilesmall.png';
import Desktopsmall from '../styles/pics/Desktopsmall.png';
import cutcolor11 from '../styles/pics/cutcolor11.png';
import cutcolor12 from '../styles/pics/cutcolor12.png';


const Home = () => {
    return (
        <>
            <body>
                <div className="home">
                    <h1 className="welcomehome">Portfolio</h1>
                    <div className="portfolio-container">
                        <div className="wrapper">
                            <img src={cutcolor12} className="imgportfolio" alt='' />
                            <img src={cutcolor11} className="imgportfolio" alt='' />
                            <img src={Blissfulbitesfigma} className="imgportfolio" alt='' />
                            <img src={Blissfulmobilesmall} className="imgportfolio" alt='' />
                            <img src={Desktopsmall} className="imgportfolio2" alt='' />
                        </div>
                    </div>
                </div>

            </body>
        </>
    )
}

export default Home;