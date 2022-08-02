import React from 'react'
import hero from "../assets/hero.png"
import Image from 'react-bootstrap/Image'

const Hero = () => {
  return (
    <div className="vh-100" style={{backgroundColor:"#eed7c5"}}>
    <div className="container">
    <h1>Hero</h1>
    <Image src={hero} className="image" fluid="true"/>
    </div>
    </div>
    )
}

export default Hero