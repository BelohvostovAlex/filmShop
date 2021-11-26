import React from 'react'

function Filter( {filmsAll, filterItems, handleActive} ) {

    const [searchVal, setSearchVal] = React.useState('')
    const [active, setActive] = React.useState(null)

    const handleActiveItem = (i) => {
        setActive(i)
        handleActive(active)
    }
    
    // const handleSearchVal = (e) => {
    //     setSearchVal(e.target.value)
    //     // filmsAll.filter(item => item.title.includes(searchVal))
    // }

    return (
        <div className="filter">
            <ul className="filterWrapper">
                <li className={active === null ? "active" : ''} onClick={() => handleActiveItem(null)}>All</li>
                {filterItems.map((item,index) => <li key={index} className={active === index ? "active" : ''} onClick={() => handleActiveItem(index)}>{item}</li>)}
            </ul>
            <div className="search_block">
            <img className="loop" src="/img/search.png" alt="loop" height={20} width={20}/>
                <input type="text" name="search" id="search" placeholder="Search..." value={searchVal} onChange={() => console.log(1)}/>
            </div>
        </div>
    )
}

export default Filter
