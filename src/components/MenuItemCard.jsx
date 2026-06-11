import React from 'react'

const MenuItemCard = ({data}) => {
  return (
    <div>
      {data.map((item) => (
      <div className="item-card" key={item.id}>
        
          <h3>{item.name}</h3>
          <p className='bold-p'>Ingredients: <span className='span-p'>{item.ingredients}</span></p>
          <p className='bold-p'>Allergens: <span className='span-p'>{item.allergens}</span></p>
        
        
      </div>
      ))}
    </div>
  )
}

export default MenuItemCard