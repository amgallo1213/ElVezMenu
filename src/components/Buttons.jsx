import React from 'react'

const Buttons = ({filterButton}) => {
  return (
    <div>
        <div className='btn-div'>
            {/* <button>Dairy Free</button>
            <button>Gluten Free</button>
            <button>No Citrus</button>
            <button>No Onion</button>
            <button>No Garlic</button>
            <button>No Pepper</button>
            <button>No Egg</button> */}

            <button type="button" onClick={() => fitlerButton('Happy Hour')}>Happy Hour</button>
        </div>
    </div>
  )
}

export default Buttons