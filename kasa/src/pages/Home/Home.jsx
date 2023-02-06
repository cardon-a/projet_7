import './Home.css'
import Banner from '../../components/Banner/Banner'
import BannerImg from '../../assets/images/title_background.svg'

function Home() {
  return (
    <div className='home'>
      <Banner image={BannerImg} text='Chez vous, partout et ailleurs'/>
      <div className='lodging__list'>
        
      </div>
    </div>
  );
}

export default Home;
