import { useState } from 'react'

import './App.css'
// import SearchFilter from './components/SearchFilter'
import MenuItemCard from './components/MenuItemCard'
import BoozeCard from './components/BoozeCard'
import { vezFood, vezBooze } from './assets/assets'




function App() {
    const [ query, setQuery ] = useState('')



    const search = (data) => {
      return data.filter((item) => 


        item.name.toLowerCase().includes(query) 
        
      )
    }

    

  return (
    <>
      <div className='main-container'>
        <h1>El Vez Menu Info</h1>
        {/* <SearchFilter  /> */}
        <div>
          <input type="query" className="query" placeholder='Search...' onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
        </div>
        
        <p>** - can be removed</p>

        <div className="item-container">
          
            <MenuItemCard data={search(vezFood)}/>
            <BoozeCard data={search(vezBooze)}/>
          
          </div>
        
      </div>
    </>
  )
}

export default App
