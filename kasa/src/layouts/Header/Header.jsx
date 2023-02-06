import { NavLink } from 'react-router-dom'
import './Header.css'
import logoHeader from '../../assets/logo/logoHeader.svg'
 
function Header() {
    return (
        <header>
            <img src={logoHeader} alt='logo de Kasa' />
            <nav>
                <NavLink to="/" className='link'>Accueil</NavLink>
                <NavLink to="/about" className='link'>À propos</NavLink>
            </nav>
        </header>
    )
}

export default Header