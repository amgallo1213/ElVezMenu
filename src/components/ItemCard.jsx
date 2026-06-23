import React from 'react'



const ItemCard = ({food}) => {
  return (
    <div className='item-card'>
        <h3>{food.name}</h3>
        {/* <p>{food.category}</p> */}
        <p>Ingredients: <span className="card-span">{food.ingredients}</span></p>
        <p>Allergens: <span className="card-span">{food.allergens}</span></p>
        <p>Notes: <span className="card-span">{food.notes}</span></p>
    </div>
  )
}

export default ItemCard
