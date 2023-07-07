import '../styles/about.css';
import kep2 from '../styles/pics/kep2.jpg';


const About = () => {
    return (
        <>
            <body>

                <div className="about-container">
                    <div className="paragraph-box">
                        <h1 className="h1text">About me</h1>
                        <p className="about-paragraph">My name is Livia Varga, I am a frontend developer and I also like to design various web and mobile applications.
                            I really like using minimalist design and pastel colors. I believe that sometimes less is more, so I prefer clean look that contains only the most important elements.
                            I would like to create the simplest possible, yet unique and expressive works. On this page, you can find my designs under portfolio.</p>
                    </div>
                    {/* <div className="color-box"></div> */}
                </div>
                
            </body>
        </>
    )
}

export default About;