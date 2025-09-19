import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";

function Checkout(){
  const [cart , setCart] = useState([]);
  const [total , setTotal] = useState([]);

     useEffect(() => {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart);
    }, []);

       useEffect(() => {
        const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
        console.log(totalPrice);
        setTotal(totalPrice);
      }, [cart]);

    return(
        <>
         <section className="inner-banner">
                <div className="container inner-back">
                    <div className="row justify-content-center">
                       <div className="col-md-8">
                        <div className="inner-heading">
                            <h4>Complete Your Order</h4>
                            <p>Adventure Starts with the Right Gear</p>
                        </div>
                            <nav aria-label="breadcrumb">
                               <ol class="breadcrumb">
                                  <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                      <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                                </ol>
                                      </nav>
                       </div>
                    </div>
                </div>
            </section>

       <div className="check-details">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                  <div className="check-from">
                     <form>
        {/* Shipping Details */}
        <div className="card mb-4">
          <div className="card-header text-white">
           <h5>Shipping Details</h5> 
          </div>                           
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">First Name *</label>
                <input type="text" className="form-control" id="firstName" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name *</label>
                <input type="text" className="form-control" id="lastName" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">Phone *</label>
                <input type="tel" className="form-control" id="phone" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email *</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label">Address *</label>
                <input type="text" className="form-control" id="address" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="city" className="form-label">City *</label>
                <input type="text" className="form-control" id="city" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="postcode" className="form-label">Post Code *</label>
                <input type="text" className="form-control" id="postcode" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="country" className="form-label">Country *</label>
                <select className="form-select" id="country" required>
                  <option value="">Select Country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="region" className="form-label">Region/State *</label>
                <select className="form-select" id="region" required>
                  <option value="">Select Region</option>
                  <option value="ny">New York</option>
                  <option value="ca">California</option>
                  <option value="tx">Texas</option>
                  <option value="fl">Florida</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Billing Details */}
        <div className="card mb-4">
          <div className="card-header text-white">
           <h5>Billing Details</h5> 
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-12">
                <label htmlFor="paymentMethod" className="form-label">Select Payment Method *</label>
                <select className="form-select" id="paymentMethod" required>
                  <option value="">Select Payment Method</option>
                  <option value="card">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </div>
              <div className="col-12">
                <label htmlFor="cardNumber" className="form-label">Card Number *</label>
                <input type="text" className="form-control" id="cardNumber" required />
              </div>
              <div className="col-md-4">
                <label htmlFor="expiryMonth" className="form-label">Select Expiry Month *</label>
                <select className="form-select" id="expiryMonth" required>
                  <option value="">Month</option>
                  <option value="01">01 - January</option>
                  <option value="02">02 - February</option>
                  <option value="03">03 - March</option>
                  <option value="04">04 - April</option>
                  <option value="05">05 - May</option>
                  <option value="06">06 - June</option>
                  <option value="07">07 - July</option>
                  <option value="08">08 - August</option>
                  <option value="09">09 - September</option>
                  <option value="10">10 - October</option>
                  <option value="11">11 - November</option>
                  <option value="12">12 - December</option>
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="expiryYear" className="form-label">Select Expiry Year *</label>
                <select className="form-select" id="expiryYear" required>
                  <option value="">Year</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="cvv" className="form-label">CVV *</label>
                <input type="text" className="form-control" id="cvv" required />
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Button */}
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="terms" required />
          <label className="form-check-label" htmlFor="terms">I agree with the terms and conditions *</label>
        </div>

        <Link type="submit" className="btn-product w-25" to="/thankyou">Place Order</Link>
      </form>
                  </div>
                </div>

                 <div className="col-md-4">
                        <div class="card checkout-order-summery">
                          <div className="checkout-card-body">
                            <h5 className="check-card-title text-center mb-4">Order Summary</h5>
                            {cart.map((product,i) =>(
                            <div className="check-product-item">
                                <img src={product.image} alt="prod"></img>
                              <div className="check-product-dtl">
                                <h5>{product.name}</h5>
                                <p>QTI: 1</p>
                              </div>
                              <div className="check-product-price">
                                <p>${product.price}</p>
                              </div>
                            </div>
                            ))}
                              <div className="check-detils">
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
                          </div>
                            
                        </div>
                      </div>
                          </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Checkout;