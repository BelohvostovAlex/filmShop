import React from 'react'
import uniqBy from 'lodash/uniqBy'

const Header = React.memo(({total, items, onRemove}) => {
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)

}, [])

  const [visible, setVisible] = React.useState(false)
  const ulRef = React.useRef()
  const cartItems = uniqBy(items, item => item.id)

  const handleCartVisiblity = () => {
    setVisible(!visible)
  }

  const handleOutsideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if(!path.includes(ulRef.current)) {
      setVisible(false)
    }
}


    return (
        <header>
          <div className="logo">
            <img widt={40} height={40} src="/img/tv.png" alt="cinema" />
            <p>Movie Shop</p>
          </div>
          <nav>
            <ul ref={(ref) => ulRef.current = ref}>
              <li>Total: {total} BYN</li>
              <li onClick={handleCartVisiblity}>Cart (<b>{items.length}</b>)</li>
            </ul>
              {visible ?
                          <div className="cart">
                          <div className="cart__top">
                            <h1>Added films</h1>
                            <img 
                            width={25}
                             height={25} 
                             src="/img/close.png" 
                             alt="close" 
                             onClick={handleCartVisiblity}/>
                          </div>
                          <div className="cart__inner">
                          {cartItems.length > 0
                        ? cartItems.map((item, index) => {
                            return (
                              <div className="cartItem" key={index}>
                                <div className="cartItem__inner">
                                  <div className="cartItem__inner-text">
                                    <img width={40} height={55} src={item.image} alt={item.title} />
                                    <h3 className="cartItem-title">{item.title}</h3>
                                  </div>
                                    <div className="cartItem__close">
                                        <img 
                                        src="/img/close2.png" 
                                        alt="close" 
                                        onClick={() => onRemove(item.id)}
                                        />
                                    </div>
                                </div>
                              </div>
                            );
                          })
                        : <div className="cart-empty">
                          <img height="80" width="80" src="/img/box.png" alt="emptyCart" />
                          </div>}
                          </div>
                  </div> 
                  : ''}
          </nav>
          
        </header>
    )
})

export default Header
