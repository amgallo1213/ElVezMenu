import React, { useState, useEffect } from 'react'

import ItemCard from './ItemCard'


const MenuItemsMain = ({ foods }) => {
    const [filteredFoods, setFilteredFoods] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [category, setCategory] = useState("")

    useEffect(() => {
        setFilteredFoods(foods)
    }, [])

    useEffect(() => {
        const query = searchQuery.toLowerCase()
        const result = foods.filter(
            (food) =>
                food.name.toLowerCase().includes(query) ||
                // food.allergens.some((allergen) =>
                //   allergen.toLowerCase().includes(query)
                // ) ||
                food.category.toLowerCase().includes(query)
        )

        setFilteredFoods(
            category
                ? result.filter((food) => food.category === category)
                : result
        )

    }, [searchQuery, category])


    const clearSearch = () => {
        setSearchQuery("")
        setCategory("")
    }

    return (
        <>
            <main>
                <section className="notes">
                    <p>items marked with ** can be modified</p>
                    <p>The only soy on the menu is in the tamari.</p>
                    <p>Tomatoes, peppers, and potatoes are nightshades.</p>
                </section>
                <section className='search-select-container'>
                    <input
                        className='search-input'
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className='select-btn-container'>
                        <select
                            className='select'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option>All Categories</option>

                            {[...new Set(foods.map((food) => food.category))].map(
                                (cat, index) => (
                                    <option key={index} value={cat}>
                                        {cat}
                                    </option>
                                )
                            )}
                        </select>
                        <button className="btn" onClick={clearSearch}>Clear Search</button>
                    </div>
                    
                </section>
                <section className="item-container">
                    {
                        filteredFoods.map((food, index) => (
                            <ItemCard key={index} food={food} />
                        ))
                    }
                </section>
            </main>

        </>
    )
}

export default MenuItemsMain