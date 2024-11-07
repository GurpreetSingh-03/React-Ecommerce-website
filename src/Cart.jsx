import React from 'react'
import { Link } from 'react-router-dom'
function Cart({ cart, setCart }) {
  return (
    <>

      <div className="container my-5" style={{ width: "54%" }}>

        {/* only show the cart is there is something in it otherwise show "your cart is empty message with some added buttons" */}
        {
          cart.length == 0 ? (
            <>
              <div className="text-center">
                <h1>Your cart is empty</h1>
                <Link to={"/"} className="btn btn-warning">Continue shopping...</Link>
              </div>

            </>) :
            cart.map((product) => {
              return <>
                <div className="card mb-3 my-5" style={{ width: '700px' }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-center">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <button className="btn btn-primary mx-3">₹ {product.price}</button>
                        <button className="btn btn-warning">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>

            })}

        {/* if cart is empty then do not show these buttons (conditional redering using $$ operator)*/}
        {cart.length != 0
          &&
          <div className="container my-5" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>

            <div className="btn btn-danger mx-5">Checkout</div>
            <div className="btn btn-warning" onClick={() => setCart("")}>Clear cart</div>

          </div>
        }
      </div>
    </>
  )
}

export default Cart