import './Home.css'
import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'
import BannerImg from '../../assets/images/title_background.svg'
import LodgingList from '../../data/lodging.json'

function Home() {
  return (
    <div className='home'>
      <Banner image={BannerImg} text='Chez vous, partout et ailleurs'/>
      <div className='lodging__list'>
        {LodgingList.map((lodging) => <Card id={ lodging.id } image={ lodging.cover } title={ lodging.title }/>)}
      </div>
    </div>
  );
}

export default Home;