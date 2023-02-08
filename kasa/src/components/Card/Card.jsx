import { NavLink } from 'react-router-dom'
import './Card.css'

function Card ({ image, title, id }) {
    return (
        <NavLink to={ "/lodging/"+ id } key={ id } className='card'>
            <img src={ image } alt="Logement"/>
            <div className='card__overlay'></div>
            <span>{ title }</span>
        </NavLink>
    )
};

export default Card;