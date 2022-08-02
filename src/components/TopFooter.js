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
        <div className="col-md sledujte ml-2">
            <h1 className='mt-4' style={{"fontSize":"1.125rem", "color":"#a3aaa7"}}> Sledujte nás </h1>
           {/*  <p>[] [] [] [] []</p> */}
           <div>
            {/* <Image src={Facebook} className="w-20"/> */}
            <Image src={Facebook} className="p-1 pointer"/>
            <Image src={Twitter} className="p-1 pointer"/>
            <Image src={Instagram} className="p-1 pointer"/>
            <Image src={Linkedin} className="p-1 pointer"/>
            <Image src={Rss} className="p-1 pointer"/>
           </div>
        </div>
        <div className="col-md newsletter">
            <h2 className='mt-5' style={{"fontSize":"1.125rem", "color":"#a3aaa7"}}>Přihlásit se k newsletteru </h2>
           {/*  <nav class="navbar navbar-light bg-light">
                <form class="d-flex m-auto w-100 mx-4">
                    <input class="form-control mr-sm-2" type="search" placeholder="example@mail.com" aria-label="Search"></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Prihlasit</button>
                </form>
            </nav> */}
            
                <div class="input-group mb-3 newsletterBar">
                <input type="text" class="form-control" placeholder="example@mail.com" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-primary" type="button" id="button-addon2">Prihlasit</button>
                </div>
              </div>
        <div className="col-md mr-2 hledate">  
            <h2 style={{"fontSize":"1.125rem", "color":"#a3aaa7"}}>Hledáte nové talenty do týmu? </h2>
            <button className='btn btn-primary my-4'>Pro Firmy</button>
        </div>
  <hr className='text-white'/>
    <ul className='d-flex row pt-4'>
        <li className='col-sm'>Newsroom</li>
        <li className='col-sm'>O nás</li>
        <li className='col-sm'>VOP</li>
        <li className='col-sm'>Osobní údaje</li>
        <li className='col-sm'>Cookies</li>
        <li className='col-sm'> Pro média</li>
        <li className='col-sm'> Kontakt </li>
    </ul>
    </div>
  )
}

export default TopFooter