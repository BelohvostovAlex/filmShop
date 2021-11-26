import React from 'react'

function Header() {
    return (
        <header>
          <div className="logo">
            <img widt={40} height={40} src="/img/tv.png" alt="cinema" />
            <p>Movie Shop</p>
          </div>
          <nav>
            <ul>
              <li>Total: 10 BYN</li>
              <li>Cart (<b>0</b>)</li>
            </ul>
          </nav>
        </header>
    )
}

export default Header
