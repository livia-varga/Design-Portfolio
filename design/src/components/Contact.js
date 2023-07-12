import '../styles/contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <body>
            <div className="contact-container">
                    <div className="paragraph-box">
                        <h1 className="h1text">Contact me</h1>
                        <p className="contact-paragraph">If you have any questions, please feel free to contact me</p>
                        <div className="color-box"></div>
                        <div className="color-box2"></div>
                        <div className="color-box3"></div>
                        <div className="info">
                            <ul>
                                <li>E-mail: varga.livia86@gmail.com</li>
                                <li>Linkedin:<Link to= "linkedin.com/in/lívia-varga-91375944" target="_blank" rel="noreferrer" className="nav-link-skincare">LINKEDIN</Link> </li>
                                <li>Websites: <Link to= "https://skincaresite.netlify.app/" target="_blank" rel="noreferrer" className="nav-link-skincare">SKINCARE</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Contact;