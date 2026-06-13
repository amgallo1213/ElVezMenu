import React, { useState } from 'react'

const SearchFilter = ({data}) => {

  const [ query, setQuery ] = useState('')

  const search = (data) => {
    return data.filter ((item) => 
      item.name.toLowerCase().includes(query)
    )
  }
  return (
    <div>
      <input type="query" className="query" placeholder='Search...' onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
    </div>
  )
}

export default SearchFilter