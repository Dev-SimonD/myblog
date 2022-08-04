import React from 'react'

const Search = () => {
  return (
    <div style={{"backgroundColor":"#f5f8fa"}}>
        {/* <nav class="navbar navbar-light bg-light"> */}
              <h1 className='text-center' style={{"color":"#2d659d", "fontSize":"1rem"}}>Buď žralok, pracuj pro startup! </h1>
                <div class="container d-flex mb-3 searchBar">
                <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-primary" type="button" id="button-addon2">Hledej</button>
                </div>
{/* </nav> */}
</div>
  )
}

export default Search