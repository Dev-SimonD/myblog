import React from 'react'
import Button from 'react-bootstrap/Button';
const Footer = () => {
  return (
    <div className='footer d-flex flex-column align-items-center'>
    <ul className='d-flex row pt-4'>
        <li className='col-sm'>Newsroom</li>
        <li className='col-sm'>O nás</li>
        <li className='col-sm'>VOP</li>
        <li className='col-sm'>Osobní údaje</li>
        <li className='col-sm'>Cookies</li>
        <li className='col-sm'> Pro média</li>
        <li className='col-sm'> Kontakt </li>
            
    </ul>
        <button className='btn btn-secondary mt-4'>English</button>
        <p className='text-white pt-4'>© 2012 – 2022 StartupJobs.com s.r.o.</p>
    </div>
  )
}

export default Footer