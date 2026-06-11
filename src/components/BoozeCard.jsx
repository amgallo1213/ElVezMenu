import React from 'react'

const BoozeCard = ({data}) => {
  return (
    <div>
        <div>
            {data.map((item) => (
                <div className="item-card" key={item.id}>
                    <h3>{item.name}</h3>
                    <p className='bold-p'>Specs: <span className='span-p'>{item.specs}</span></p>
                    <p className='bold-p'>Garnish: <span className='span-p'>{item.garnish}</span></p>
                    <p className='bold-p'>Notes: <span className='span-p'>{item.notes}</span></p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default BoozeCard