import './Footer.css'
import logoFooter from '../../assets/logo/logoFooter.svg'
 
function Footer() {
    return (
        <footer>
            <img src={logoFooter} alt='logo de Kasa' />
            <p>&copy; 2022 Kasa. Tous droits réservés</p>
        </footer>
    )
}

export default Footer