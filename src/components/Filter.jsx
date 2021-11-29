import React from 'react'

function Filter({ filterItems, handleActive, searchVal, handleSearch}) {


    const [active, setActive] = React.useState(null)

    const handleActiveItem = (type) => {
        setActive(type)
        handleActive(type)
    }

    const handleSearchFunc = (e) => {
        handleSearch(e.target.value)
    }

    return (
        <div className="filter">
            <ul className="filterWrapper">
                <li className={active === null ? "active" : ''} onClick={() => handleActiveItem(null)}>All</li>
                {filterItems.map((item,index) => <li key={index} className={active === item ? "active" : ''} onClick={() => handleActiveItem(item)}>{item}</li>)}
            </ul>
            <div className="search_block">
            <img className="loop" src="/img/search.png" alt="loop" height={20} width={20}/>
                <input type="text" name="search" id="search" placeholder="Search..." value={searchVal} onChange={handleSearchFunc}/>
            </div>
        </div>
    )
}

export default Filter
