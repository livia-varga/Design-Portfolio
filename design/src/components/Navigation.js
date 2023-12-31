import { Link } from 'react-router-dom';
import '../styles/navigation.css';

function Navigation() {

    return (
        <>
            <div className="logo-container">
                <Link to="/" className="nav-link-logo">LIVI|VISUALS</Link>
            </div>
            <div className="nav-container">
                <div className='navbar'>
                    <Link to="/about" className="nav-link">ABOUT</Link>
                    <Link to='/portfolio' className="nav-link">PORTFOLIO</Link>
                    <Link to='/contact' className="nav-link">CONTACT</Link>
                </div>
            </div>
        </>
    )
}

export default Navigation;