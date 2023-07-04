import '../styles/home.css';
import kepp from '../styles/pics/kepp.png';

const Home = () => {
    return (
        <>
        <body>    
            <div className="home">
               <h1 className="welcomehome">Portfolio</h1> 
               <img src={kepp} alt='' />
            </div>
            
        </body>
        </>
    )
}

export default Home;