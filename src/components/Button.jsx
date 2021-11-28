import React from 'react'

function Button( {children, handleAddToCart} ) {
    return (
        <button onClick={handleAddToCart}>
            {children}
        </button>
    )
}

export default Button
