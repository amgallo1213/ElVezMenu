import React from 'react'

const BoozeCard = ({data}) => {
  return (
    <div>
        <div>
            {data.map((item) => (
                <div className="item-card" key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Specs: {item.specs}</p>
                    <p>Garnish: {item.garnish}</p>
                    <p>Notes: {item.notes}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default BoozeCard