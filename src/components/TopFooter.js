import React from 'react'
import Facebook from "../assets/facebook2.png"
import Rss from "../assets/rss2.png"
import Instagram from "../assets/instagram2.png"
import Linkedin from "../assets/linkedin2.png"
import Twitter from "../assets/twitter2.png"
import Image from 'react-bootstrap/Image'


const TopFooter = () => {
  return (
    <div className='topfooter row d-flex align-items-center justify-content-center'>
        <div className="col-lg sledujte">
            <h1 /* style={{"fontSize":"1.125rem", "color":"#a3aaa7", "textAlign":"left"}} */> Sledujte nás </h1>
            <div style={{"paddingLeft":"20px"}}>
              <Image src={Facebook} className="p-1 pointer"/>
              <Image src={Twitter} className="p-1 pointer"/>
              <Image src={Instagram} className="p-1 pointer"/>
              <Image src={Linkedin} className="p-1 pointer"/>
              <Image src={Rss} className="p-1 pointer"/>
            </div>
        </div>
        <div className="col-lg newsletter">
            <h2 /* style={{"fontSize":"1.125rem", "color":"#a3aaa7", "textAlign":"center"}} */>Přihlásit se k newsletteru </h2>   
                <div class="input-group mb-3 newsletterBar">
                  <input type="text" class="form-control" placeholder="example@mail.com" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                  <button className="btn btn-primary" type="button" id="button-addon2">Prihlasit</button>
                </div>
              </div>
        <div className="col-lg hledate">  
            <h2 /* style={{"fontSize":"1.125rem", "color":"#a3aaa7", "textAlign":"end"}} */>Hledáte nové talenty do týmu? </h2>
            <div className="proFirmyBtn">
            <button className='btn btn-primary'>Pro Firmy</button>
            </div>
        </div>
     
  <hr className='text-white mt-4 px-2'/>
    <ul className='d-flex row pt-4 topFooterUl p-2'>
        <li className='col-md topli'>Co je startup?</li>
          <hr className='text-white' style={{"width":"10px","height":"10px","margin":"auto"}}/> 
        <li className='col-md' style={{"color":"#217edb"}}>Proč si u nás založit profil?</li>
        <hr className='text-white' style={{"width":"10px","height":"10px","margin":"auto"}}/>
        <li className='col-md' style={{"color":"#217edb"}}>Průvodce profilem</li>
        <hr className='text-white' style={{"width":"10px","height":"10px","margin":"auto"}}/>
        <li className='col-md' style={{"color":"#217edb"}}>Znalostní testy</li>
        <hr className='text-white' style={{"width":"10px","height":"10px","margin":"auto"}}/>
        <li className='col-md' style={{"color":"#217edb"}}>Raketový růst kariéry</li>
        <hr className='text-white' style={{"width":"10px","height":"10px","margin":"auto"}}/>
        <li className='col-md' style={{"color":"#217edb"}}> SharkTalk podcast</li>
        <hr className='text-white' style={{"width":"10px","height":"10px","margin":"auto", "paddingBottom":"20px"}}/>
    </ul>
    </div>
  )
}

export default TopFooter