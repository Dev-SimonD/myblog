import React from 'react'

const Search = () => {
  return (
    <nav class="navbar navbar-light bg-light">
  <form class="d-flex m-auto w-100 mx-4">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
  )
}

export default Search