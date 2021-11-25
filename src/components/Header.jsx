import React from 'react'
import { Menu } from 'semantic-ui-react'

function Header() {
    return (
        <div>
             <Menu>
        <Menu.Item
          name='movvieShop'
        >
          Movie Shop
        </Menu.Item>


        <Menu.Menu position='right'>
          <Menu.Item
            name='total'
          >
            Total Sum: 0 BYN
          </Menu.Item>

          <Menu.Item
            name='cart'
          >
            Cart (<b>0</b>)
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
        </div>
    )
}

export default Header
