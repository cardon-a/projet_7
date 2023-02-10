import React, { useState } from "react"
import './Carousel.css'
import arrow from '../../assets/components/Carousel/arrow.svg'


function Carousel({ images }) {
    let [imgHook, changeImg] = useState(0)
    let imgLength = images.length

    const imgPrevious = () => {
        if (imgHook === 0) {
            return(changeImg(imgLength - 1));
        } else {
            return(changeImg(imgHook - 1));
        }
    }

    const imgNext = () => {
        if (imgHook === imgLength - 1) {
            return(changeImg(0));
        } else {
            return(changeImg(imgHook + 1));
        }
    }

    return(
        <div className="carousel">
            {
                imgLength > 1 && <img className="arrow arrow__left" src={ arrow } alt="Vue précédente" onClick={imgPrevious}/>
            }
            {
                images.map((image, i) => {
                    return(<img key={ i } className={ i === imgHook ? 'carousel__img' : 'inactive' } src={ image } alt='Logement'/>)
                })
            }
            <span className={ imgLength === 1 ? 'carousel__legend  inactive' : 'carousel__legend' }>{ imgHook + 1 }/{ imgLength }</span>
            {
                imgLength > 1 && <img className="arrow" src={ arrow } alt="Vue suivante" onClick={imgNext}/>
            }
        </div>
    )
}

export default Carousel;