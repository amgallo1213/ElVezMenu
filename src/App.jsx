import { useState } from 'react'

import './App.css'
import MenuItemCard from './components/MenuItemCard'
import BoozeCard from './components/BoozeCard'
import { vezFood } from './assets/assets'
import { vezBooze } from './assets/assets'




function App() {
    const [ query, setQuery ] = useState('')

    // const keys = [ "name", "ingredients", "allergens"]


    const search = (data) => {
      return data.filter((item) => 

        // keys.some((key) => item[key].toLowerCase().includes(query)) 

        item.name.toLowerCase().includes(query) 
        // || item.ingredients.toLowerCase().includes(query) 
        // || item.allergens.toLowerCase().includes(query)
      )
    }

    

  return (
    <>
      <div className='main-container'>
        <h1>El Vez Menu Info</h1>
        <input type="query" className="query" placeholder='Search...' onChange={(e) => setQuery(e.target.value.toLowerCase())}/>

        <div className="item-container">

          {/* {vezFood
          .filter((item) => {
            return query.toLowerCase() === ''
            ? item 
            : item.name.toLowerCase().includes(query)
          })
          .map((item) => (

            <div key={item.id} className='item-card'>
              <h3>{item.name}</h3>
              <p>Ingredients: {item.ingredients}</p>
              <p>Allergens: {item.allergens}</p>
            </div>
          ))} */}
          <BoozeCard data={search(vezBooze)}/>
          <MenuItemCard data={search(vezFood)}/>
          </div>
        
      </div>
    </>
  )
}

export default App
