import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import '../../styles/header.css';

function Header() {
    return (
        <header className='Header'>
            <img className='Header_logo' src={Logo} alt='Logo Kasa'/>
            <nav className='Header_nav'>
                <ul>
                    <li className='Header_link'><Link to='/'>Accueil</Link></li>
                    <li className='Header_link'><Link to='/about'>A Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header