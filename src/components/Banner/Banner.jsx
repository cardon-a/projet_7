import './Banner.css'

function Banner ({ image, text }) {
    return (
        <div className='banner'>
            <img src={image} alt='Bannière de Kasa'/>
            <div className='banner__overlay'></div>
            <span>{text}</span>
        </div>
    )
};

export default Banner;