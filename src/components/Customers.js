import React, { useState } from 'react'
import {Splide, SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import Ema from "../assets/ema.jpg"
import Pavla from "../assets/pavla.jpg"
import Robert from "../assets/robert.jpg"
import fac from "../assets/facebook2.png"
import twi from "../assets/twitter2.png"
import { Link } from "react-router-dom"

const Customers = () => {

    const [customers, setCustomers] = useState([
        {
        id: 1,
        image: Ema,
        text: "Some short text"
        },
        {
        id: 2,
        image: Pavla,
        text: "Some short text"
        },
        {
        id: 3,
        image: Robert,
        text: "Some short text"
        },
        {
        id: 4,
        image: Robert,
        text: "Some short text"
        },
        {
        id: 5,
        image: Ema,
        text: "Some short text"
        },
        {
            id: 6,
            image: Robert,
            text: "Some short text"
            },
            {
            id: 7,
            image: Ema,
            text: "Some short text"
            },
])
  return (
    <div className="container">
         <h1 className="text-center fw-bold pt-5" style={{"fontSize": "1.375rem"}}>
         Co o nás říkají zájemci?
            </h1>
         <p>Ahoj, jsem Pavla a ve SpaceKnow pracuju jako Data Analyst.
             Na své práci mám - kromě svého týmu - nejraději to,
              že každý den poznávám do detailů nová místa planety
               a nemusím kvůli tomu cestovat daleko.
        </p>   
        <h2>Carousel</h2>
        
        {/* Splide */}

        {customers ? (
        <Splide options={{
            /* type:"loop", */
                      /* mediaQuery: 'max',
                        perPage: 3,
                        gap: "1rem",
                        arrows: true,
                        width: "60vw",
                        rewind: true,
                        lazyLoad: false,
                        pagination: "slider", */
                       /*  mediaQuery: 'max', */
                        perPage: 3,
                        gap: "1rem",
                        arrows: true,
                        width: "60vw",
                        type: "loop",
                        easingFunc: true,
                        lazyLoad: false,
                        pagination: true,
                         flickMaxPages: 1,
                      
                        breakpoints: {
                            1000: {
                              direction: "ltr",
                                perPage: 3,
                                gap: "2rem",

                            },
                              640: {
                                direction: "ltr",
                                  perPage: 3,
                                gap: "1rem",
                               
                                                         
                                 },
                                 600: {
                                  destroy: true,
                                  
                                   },
                                   
                              
                        }
                      
                        
                    }}>
                      
                    {customers.map((customer) => {
                        return(
                            <SplideSlide key={customer.id}>
                                    
                                        <div className="cards" id='ourPicks'>
                                 <img className='splideImg' data-splide-lazy={customer.image} src={customer.image} alt="alt"/>
                                 
                                 <div /* className='favoritesCardContent' */>
                                 <div /* className='cardContentfavorites' */> 
                  
                                </div>
                                <p className="cardTitle has-text-centered pb-5">calories: {customer.text}</p>
                                 </div>
                               </div>

                                
                         </SplideSlide>
                            
                        );
                    })}
                    
                    </Splide>

                    ):("")}
        
    </div>
  )
}

export default Customers