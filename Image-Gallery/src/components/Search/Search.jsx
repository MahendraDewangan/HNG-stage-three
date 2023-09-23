import React from 'react'
import './Search.css'


const Search = ({photosList, handleSearch, searchInput}) => {
  // To Drag Element Reference
  const dragItem = React.useRef(null)
  const dragOverItem = React.useRef(null)
 

  return (
    <div className='search-input'>
      <form>
        <input 
          type="search" 
          className='w-full sm:w-3/5 py-2 px-4 outline-none rounded-md'
          placeholder='Search Images'
          ref={searchInput}
          onChange={handleSearch}
          />
        {/* <button onClick={() => handleSelection('nature')} className='text-orange border-solid border-orange p-2'>Search</button> */}
      </form>
    </div>
  )
}

export default Search