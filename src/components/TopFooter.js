import React from 'react'

const TopFooter = () => {
  return (
    <div className='topfooter d-flex flex-column align-items-center'>
        <h1 className='text-white' style={{"fontSize":"1.125rem"}}> Sledujte nás </h1>
        <p>[] [] [] [] []</p>
        <h2 className='text-white mt-5' style={{"fontSize":"1.125rem"}}>Přihlásit se k newsletteru </h2>
        <nav class="navbar navbar-light bg-light">
  <form class="d-flex m-auto w-100 mx-4">
    <input class="form-control mr-sm-2" type="search" placeholder="example@mail.com" aria-label="Search"></input>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Prihlasit</button>
  </form>
</nav>
  <h2 className='text-white' style={{"fontSize":"1.125rem"}}>Hledáte nové talenty do týmu? </h2>
  <button className='btn btn-primary mt-4'>Pro Firmy</button>
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