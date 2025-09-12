import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Cart(){
   const [cart , setCart] = useState([]);
   const [total , setTotal] = useState([]);
//    const [cart , setCart] = useState([]);

   useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

   useEffect(() => {
    const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    console.log(totalPrice);
    setTotal(totalPrice);
  }, [cart]);

  // const handleRemove = (id) => {
  //   const updatedCart = cart.filter((_,i) => i !== id);
  //   setCart(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };

  // const clearCart = () => {
  //   setCart([]);
  //   localStorage.removeItem("cart");
  // };
    return(
        <>
         <section className="inner-banner">
        <div className="container inner-back">
            <div className="row justify-content-center">
               <div className="col-md-8">
                <div className="inner-heading">
                    <h4>Our Products</h4>
                    <p>Adventure Starts with the Right Gear</p>
                </div>
                    <nav aria-label="breadcrumb">
                       <ol class="breadcrumb">
                          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                              <li class="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                              </nav> 
               </div>
            </div>
        </div>
    </section>
    <section className="cart-body">
      <div className="container">
        <div className='section-heading'>
            <h2>Your cart (1)</h2>
        </div>
        <div className="row">
          <div className="col-md-9">
           <div className="cart-content">
           <div class="cart-header">
      <div className="product-detel">Product</div>
      <div className="price">Price</div>
      <div className="quantity">Quantity</div>
      <div className="total">Total</div>
      <div className="remove"></div>
    </div>
            {cart.map((product) =>(
             <div className="cart-item">
      <div className="product-info">
        <img src={product.image} alt={product.name}/>
        <span>{product.name}</span>
      </div>
      <div className="price">${product.price}</div>
      <div className="quantity">
        <div className="quantity-control">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
      <div className="total">${product.price}</div>
      <div className="remove"><i class="fa fa-trash" aria-hidden="true"></i></div>
      {/* <button onClick={clearCart}>test</button> */}
    </div>
            ))}
           </div>
          </div>
          <div className="col-md-3">
        <div class="card order-summery">
          <div className="card-body">
            <h5 className="card-title text-center mb-4">Order Summary</h5>

            <div className="d-flex justify-content-between mb-4">
              <span>Item Price</span>
              <span>${total}</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span>Shipping Price</span>
              <span>$0.00</span>
            </div>
            <hr/>
            <div className="d-flex justify-content-between fw-bold mb-3">
              <span>Total Price</span>
              <span>${total}</span>
            </div>
            <div className="text-center">
               <Link className="btn-product" to="checkout">Proceed to Checkout<i class="fa fa-shopping-bag" aria-hidden="true"></i></Link>
            </div> 
            
        </div>
      </div>
          </div>
        </div>
      </div>
    </section>
        {/* // {cart.map((product) =>(
        //     <h1>{product.name}</h1>
        // ))}
        // <h4>{total}</h4> */}

        
        </>
    );
}

export default Cart;