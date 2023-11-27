import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

export default function addToCart () {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
  console.log(getCartTotal());
  return (
      <div className="addtocart1">
        <div className="addtocart2">
          {cartItems.map((item) => (
            <div className="addtocart3" key={item.id}>
                <img src={item.src} alt={item.name}/>
                  <p style={{fontSize:"18px"}}>{item.name}</p>
                  <p style={{fontWeight:"bold",color:"red",fontSize:"20px"}}>₹{item.price}</p>
              <div className="addtocart4">
                <button className='addbtn4'
                  onClick={() => {
                    addToCart(item)
                  }}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  className="addbtn4"
                  onClick={() => {
                    removeFromCart(item)
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        {
          cartItems.length > 0 ? (
          <div>
          <h1>Total: ₹{getCartTotal().toLocaleString()}</h1>
          <button
            className=""
            onClick={() => {
              clearCart()
            }}
          >
            Clear cart
          </button>
        </div>
          ) : (
            <h1>Your cart is empty</h1>
          )
        }
      </div>
  )
}
