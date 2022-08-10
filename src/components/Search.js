import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = () => {
  return (
    <div style={{"backgroundColor":"#f5f8fa", "height":"30vh"}} >
        {/* <nav class="navbar navbar-light bg-light"> */}
              <h1 className='text-center budzralok' /* style={{"color":"#2d659d", "fontSize":"1.625rem"}} */>Buď žralok, pracuj pro startup! </h1>
                <div class="container d-flex mb-3 searchBar">
                <input type="text" class="form-control" style={{"borderRadius":"0"}} placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-primary" style={{"borderRadius":"0"}} type="button" id="button-addon2"><i className="fas fa-search"></i></button>
                
                </div>
{/* </nav> */}
</div>
  )
}

export default Search