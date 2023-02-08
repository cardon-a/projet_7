import './Collapse.css'
import Arrow from '../../assets/images/arrow.svg'
import { useState } from 'react';

function Collapse({ title, description }) {
    const [open, setOpen] = useState(false)

    return (
        <div className='collapse'>
            <div className='collapse__header' onClick={() => setOpen(!open)}>
                <span>{ title }</span>
                <img className={ `${open}` } src={ Arrow } alt="Ouvrir l'onglet"/>
            </div>
            {
                open && <div className='collapse__description'>{ description }</div>
            }
        </div>
    );
}

export default Collapse;