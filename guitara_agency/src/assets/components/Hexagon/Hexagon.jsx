import { Link } from 'react-router-dom';
import './Hexagon.css';

const Hexagon = () => {
    const handlePlatformClick = (platform) => {
        localStorage.setItem('platform', platform);  // Store selected platform in localStorage
    };

    return (
        <>
            <div className="hexagonPage">
                
             
                <div className="hexagon">
                    <Link to="/tiktok" onClick={() => handlePlatformClick('tiktok')}>
                        <img src='./images/tiktokmovin.gif' alt='Not Found' className="hexagon-image wow animate__fadeInUp" />
                    </Link>
                </div>
                <div className="hexagon">
                    <Link to="/bigo" onClick={() => handlePlatformClick('bigo')}>
                        <img src='./images/bigo2.gif' alt='Not Found' className="hexagon-image wow animate__fadeInUp" />
                    </Link>
                </div>
                <div className="hexagon">
                    <Link to="/mico" onClick={() => handlePlatformClick('mico')}>
                        <img src='./images/micobg.png' alt='Not Found' className="hexagon-image size-mico" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Hexagon;
