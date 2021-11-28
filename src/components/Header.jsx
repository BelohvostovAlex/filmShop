import React from 'react'

function Header({total, items}) {
  console.log(items)
    return (
        <header>
          <div className="logo">
            <img widt={40} height={40} src="/img/tv.png" alt="cinema" />
            <p>Movie Shop</p>
          </div>
          <nav>
            <ul>
              <li>Total: {total} BYN</li>
              <li>Cart (<b>{items.length}</b>)</li>
            </ul>
          </nav>
        </header>
    )
}

export default Header
