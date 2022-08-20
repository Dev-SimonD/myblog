import React from 'react'
import { Image } from 'react-bootstrap'
import Vyvoj from "../assets/vyvoj.png"
import Marketing from "../assets/marketing.png"
import Analytika from "../assets/analytika.png"
import Managment from "../assets/managment.png"
import Administrativa from "../assets/administrativa.png"
import Spoluzakladatel from "../assets/spoluzakladatel.png"

const IconBar = () => {
  return (
    <div className='container iconBar'>
        <div className="d-flex flex-column align-items-center iconItem">
            <Image src={Vyvoj} className="image" style={{"width":"40px"}}fluid="true"/>
            <div>
            <p className='iconText'>Vývoj</p>
            </div>
        </div>
        <div className="d-flex flex-column align-items-center iconItem">
        <Image src={Marketing} className="image" style={{"width":"40px"}}fluid="true"/>
        <div>
            <p className='iconText'>Marketing a obchod</p>
            </div>
        </div>
        <div className="d-flex flex-column align-items-center iconItem">
        <Image src={Analytika} className="image" style={{"width":"40px"}}fluid="true"/>
            <p className='iconText'>Analytika</p>
        </div>
        <div className="d-flex flex-column align-items-center iconItem">
        <Image src={Managment} className="image" style={{"width":"40px"}}fluid="true"/>
            <p className='iconText'>Managment</p>
        </div>
        <div className="d-flex flex-column align-items-center iconItem">
        <Image src={Administrativa} className="image" style={{"width":"40px"}} fluid="true"/>
            <p className='iconText'>Administrativa a jiné</p>
        </div>
        <div className="d-flex flex-column align-items-center iconItem" id="spoluzakladatel">
        <Image src={Spoluzakladatel} className="image" style={{"width":"40px"}}fluid="true"/>
            <p className='iconText'>Spoluzakladatel</p>
        </div>
    </div>
  )
}

export default IconBar