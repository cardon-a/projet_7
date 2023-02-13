import './Lodging.css';
import LodgingList from '../../data/lodging.json'
import { useParams, Navigate } from 'react-router-dom';
import Star from '../../assets/pages/Lodging/star.svg'
import StarEmpty from '../../assets/pages/Lodging/starEmpty.svg'
import Tag from '../../components/Tag/Tag'
import Collapse from '../../components/Collapse/Collapse'
import Carousel from '../../components/Carousel/Carousel'

function Lodging() {
  const id = useParams()  // Récupération de l'id et du bon produit
  const lodging = LodgingList.find(lodging => lodging.id === id.id)

  let rating = []   // Ajout des étoiles pour la note
  for (let i = 0; i < 5; i++) {
    if (i < parseInt(lodging?.rating)) {
      rating.push(<img key={ i } src={ Star } alt='Étoile pleine'></img>)
    } else {
      rating.push(<img key={ i } src={ StarEmpty } alt='Étoile vide'></img>)
    }
  }

  let equipmentDescription = ''
  lodging?.equipments.map(equipment => equipmentDescription = equipmentDescription + equipment + '\n')
  
  return (
    <>
      {
        lodging ? (
          <div className="lodging">
            <Carousel images={ lodging.pictures }/>
            <div className='lodging__infos'>
              <div className='lodging__infos__left'>
                <h1>{ lodging.title }</h1>
                <span>{ lodging.location }</span>
                <Tag tags={ lodging.tags }/>
              </div>
              <div className='lodging__infos__right'>
                <div className='lodging__infos__right__owner'>
                  <span>{ lodging.host.name }</span>
                  <img src={ lodging.host.picture } alt='Propriétaire'/>
                </div>
                <div className='lodging__infos__right__rate'>
                  { rating }
                </div>
              </div>
            </div>
            <div className='lodging__collapse'>
              <Collapse title='Description' description={ lodging.description }/>
              <Collapse title='Équipements' description={ equipmentDescription }/>
            </div>
          </div>
        ) : <Navigate replace to='/404'/>
      }
    </>
  );
}

export default Lodging;