import React from 'react'

const MenuItemCard = ({data}) => {
  return (
    <div>
      {data.map((item) => (
      <div className="item-card" key={item.id}>
        
          <h2>{item.name}</h2>
          <p>Ingredients: {item.ingredients}</p>
          <p>Allergens: {item.allergens}</p>
        
        
      </div>
      ))}
    </div>
  )
}

export default MenuItemCard