import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notFound">
        <h1>404</h1>
        <span>Oups! La page que vous demandez n'existe pas.</span>
        <Link to="/" className='notFound__link'>Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default NotFound;