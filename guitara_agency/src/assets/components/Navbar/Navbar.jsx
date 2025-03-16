import { Link } from 'react-router-dom';
import GuitaraNavbar from './Navbar.module.css';

export default function Navbar() {
    return (
        <div className={GuitaraNavbar.guitaraNavbar}>
            <div className={GuitaraNavbar.guitaraBackground}>
                <div className={GuitaraNavbar.guitaraLogo}>
                    <Link to="/">
                        <img
                            className={GuitaraNavbar.logoImage}
                            src='./images/guitara logo.png'
                            alt="Logo"
                        />
                    </Link>
                    <h2 data-text="Exclusive Livestreaming Services">Exclusive Livestreaming Services</h2>
                </div>
            </div>
        </div>
    );
}