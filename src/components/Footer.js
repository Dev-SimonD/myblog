import React from 'react'
import Button from 'react-bootstrap/Button';
const Footer = () => {
  return (
    <div>
    <div className='footer'>
      <div /* className="container d-flex flex-row justify-content-center align-items-center" */>
{/*        <p className='text-white' id='copyLeft'>© 2012 - 2022 StartupJobs.com s.r.o.</p>
 */}        <ul className='d-flex row'>
            <li style={{"color":"grey"}}>© 2012 - 2022 StartupJobs.com s.r.o.</li>
            <li className='col-sm'>Newsroom</li>
            <li className='col-sm'>O nás</li>
            <li className='col-sm'>VOP</li>
            <li className='col-sm'>Osobní údaje</li>
            <li className='col-sm'>Cookies</li>
            <li className='col-sm'>Pro média</li>
            <li className='col-sm'>Kontakt</li> 
        </ul>
        <button className='btn btn-secondary'>English</button>
        {/* <p className='text-white pt-4 copyright' id='copyRight'>© 2012 - 2022 StartupJobs.com s.r.o.</p> */}
        </div>
    </div>

  <div className='footer d-flex align-center text-center justify-content-center'>
    <a href="#">Newsroom</a>
    <a href="#">O nas</a>
    <a href="#">VOP</a>
    <a href="#">Osobni udaje</a>
    <a href="#">Cookies</a>
    <a href="#">Pro Media</a>
    <a href="#">Kontakt</a>
  </div>
        
    </div>
  )
}

export default Footer