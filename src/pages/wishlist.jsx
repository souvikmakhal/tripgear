import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Wishlist(){
      const [Wishlist , setWishlist] = useState([]);
      
     
        useEffect(() => {
         const savedwish = JSON.parse(localStorage.getItem("wishlist")) || [];
         setWishlist(savedwish);
       }, []);

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
                          {/* <li class="breadcrumb-item"><Link to="/">Home</Link></li> */}
                              <li class="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                              </nav>
               </div>
            </div>
        </div>
    </section>
        <div className="wish-product">
            <div className="container">
                <div className="row">
                    {Wishlist.map((product) =>(
             <div className="col-md-3">
                    <div className="product-item">
                      <div className="product-img text-center">
                        <img src={product.image} className="img-fluid product-image" alt={product.name}/>
                      </div>
                      <div className="product-dtel">
                        <div className='rating'>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i> 
                        <i className="fa fa-star" aria-hidden="true"></i> 
                        <span className="product-rating">({product.reviews})</span>
                        </div>
                        <h3 className="product-name">{product.name}</h3>
                         <div className="price-review">
                        <p className="">${product.price} <span>${product.oldPrice}</span></p>
                         </div>
                      </div>
                      <div className='p-button text-center'>
                      <Link className="btn-product" to={`/Productdetails/${product.id}`}>Order Now <i class="fa fa-shopping-bag" aria-hidden="true"></i></Link>
                      </div>
                      <div className='popup-icon'>
                        <Link className="item-icon" to="/"><i class="fal fa-trash"></i></Link>
                        <Link className="item-icon" to="/"><i class="fal fa-eye"></i></Link>
                      </div>
                    </div>
                          </div>
        ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Wishlist;