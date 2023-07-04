import { Link } from 'react-router-dom';
import '../styles/navigation.css';

function Navigation() {

    return (
        <>
            <div className="nav-container">
                <div className='navbar'>
                    <Link to="/" className="nav-link">LOGO</Link>
                    <Link to="/about" className="nav-link">ABOUT</Link>
                    <Link to='/termekek' className="nav-link">PORTFOLIO</Link>
                    <Link to='/varazslo' className="nav-link">CONTACT</Link>
                </div>
            </div>
        </>
    )
}

export default Navigation;