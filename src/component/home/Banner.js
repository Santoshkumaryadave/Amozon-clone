import React from 'react'
import "./banner.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./banner.css"

var Carousel = require('react-responsive-carousel').Carousel;


const Banner = () => {
  const data = [
    "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
    " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
]
  
  return (
    <Carousel
    className='carasousel'
    autoPlay={true} 
    showIndicators={false}
    showThumbs={false}
    infiniteLoop={true}
    showArrows={true}
    >{
        data.map((imag, i) => {
            return (
                <>
                    <img src={imag} alt="img" key={i} className="banner_img" />
                </>
         )
     })
     }
    </Carousel>
  )
}

export default Banner