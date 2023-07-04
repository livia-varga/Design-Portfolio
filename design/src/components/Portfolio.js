import '../styles/portfolio.css';
import kepp from '../styles/pics/kepp.png';

const Home = () => {
    return (
        <>
        <body>    
            <div className="home">
               <h1 className="welcomehome">Portfolio</h1> 
               <h2 className="h2text">Travel blog</h2>
               <img src ={kepp} className="imgportfolio" alt='' />
            </div>
            
        </body>
        </>
    )
}

export default Home;