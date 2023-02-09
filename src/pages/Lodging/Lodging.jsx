import './Lodging.css';
import LodgingList from '../../data/lodging.json'
import Banner from '../../components/Banner/Banner'
import { useParams } from 'react-router-dom';
import Star from '../../assets/pages/Lodging/star.svg'
import StarEmpty from '../../assets/pages/Lodging/starEmpty.svg'
import Tag from '../../components/Tag/Tag'
import Collapse from '../../components/Collapse/Collapse'

function Lodging() {
  const id = useParams()  // Récupération de l'id et du bon produit
  const lodging = LodgingList.find(lodging => lodging.id === id.id)

  let rating = []   // Ajout des étoiles pour la note
  for (let i = 0; i < 5; i++) {
    if (i < parseInt(lodging.rating)) {
      rating.push(<img key={ i } src={ Star } alt='Étoile pleine'></img>)
    } else {
      rating.push(<img key={ i } src={ StarEmpty } alt='Étoile vide'></img>)
    }
  }

  let equipmentDescription = ''
  lodging.equipments.map(equipment => equipmentDescription = equipmentDescription + equipment + '\n')
  console.log("Apres "+equipmentDescription)
  
  return (
    <div className="lodging">
      <Banner image={ lodging.cover } text=''/>
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
  );
}

export default Lodging;