import { useState } from 'react'

import './App.css'
// import SearchFilter from './components/SearchFilter'
import MenuItemCard from './components/MenuItemCard'
import BoozeCard from './components/BoozeCard'
import { vezFood, vezBooze } from './assets/assets'
import Buttons from './components/Buttons'





function App() {
    const [ query, setQuery ] = useState('')
    const [ button, setButton ] = useState([])

    const filterButton = (button) => {
      const filteredData = vezFood.filter(item => item.category === button)
      setQuery(filteredData)
    }



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
        <p>The only soy on the menu is in the tamari.</p>
        <p>Our chips are gluten free but if someone is extremely sensitive to gluten, they should not have them as we cannot guarantee no cross contamination.</p>

        {/* <Buttons filter={filterButton}/> */}

        <div className="item-container">
          
            <MenuItemCard data={search(vezFood)}/>
            <BoozeCard data={search(vezBooze)}/>
          
          </div>
        
      </div>
    </>
  )
}

export default App
