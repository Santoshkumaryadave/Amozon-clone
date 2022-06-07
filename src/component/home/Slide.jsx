import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Divider } from "@mui/material";
import { products } from "./product details/Products";
import "./slide.css"

const Slide = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="products_section">
      <div className="products_deal">
        <h3>{props.title}</h3>
        <button className="view_btn">View All</button>
      </div>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
          {products.map((e)=>{
             return(
               <div className="products_items">
                 
                   <div className="products_img">
                       <img src={e.url} alt="" />
                   </div>
                   <p className="product_name">{e.title.shortTitle}</p>
                   <p className="product_offer">{e.discount}</p>
                   <p className="product_explore">{e.tagline}</p>
               </div>  
             )
          })}
      </Carousel>
    </div>
  );
};

export default Slide;
