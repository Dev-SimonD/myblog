import React, { useState } from 'react'
import {Splide, SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import Ema from "../assets/ema.jpg"
import Pavla from "../assets/pavla.jpg"
import Robert from "../assets/robert.jpg"
import fac from "../assets/facebook2.png"
import twi from "../assets/twitter2.png"
import { Link } from "react-router-dom"
import CarouselComponent from "../components/CarouselComponent"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Customers = () => {

  return (
    <div className="container">
         <h1 className="text-center fw-bold pt-5" style={{"fontSize": "1.375rem"}}>
         Co o nás říkají zájemci?
            </h1>
        
            <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={true}
        showStatus={true}
        autoPlay={false}
        interval={6100}
      >
        <div>
          <img src="/images/shirley.png" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src="/images/daniel.png" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/theo.png" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designers</h4> 
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Customers