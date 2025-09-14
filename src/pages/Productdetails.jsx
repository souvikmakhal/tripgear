import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import productData from "../Data/productData";

function Productdetails(){
    const showProduct = useParams();
    const product = productData.find((item) => item.id === Number(showProduct.id));
    const cartButton =() => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const exestingItem = cart.find((cartItem) => cartItem.id === product.id);
      if (exestingItem){
               exestingItem.quantity +=1;
      }
      else {
        cart.push({...product,quantity:1});
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      // updateCounts();
      window.dispatchEvent(new Event("cartUpdated"));
      // navigate("/cart");
      // window.location.reload();
      
    }
    return(
      <>
          <section className="inner-banner">
        <div className="container inner-back">
            <div className="row justify-content-center">
               <div className="col-md-8">
                <div className="inner-heading">
                    <h4>Product Overview</h4>
                    <p>Adventure Starts with the Right Gear</p>
                </div>
                    <nav aria-label="breadcrumb">
                       <ol class="breadcrumb">
                          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                              <li class="breadcrumb-item active" aria-current="page">{product.name}</li>
                        </ol>
                              </nav>
               </div>
            </div>
        </div>
    </section>
    <section className="product-details">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="product-images">
                   <img src={product.image} alt={product.name}/>
            </div>
          </div>
          <div className="col-md-6">
             <div className="product-detils">
              <h2>{product.name}</h2>
              <div className="product-rating">
               <i className="fa fa-star" aria-hidden="true"></i> <p>{product.rating} <span>({product.reviews})</span></p>
              </div>
              <h3>Price: ${product.price}</h3>
              <div className="product-detials">
              <b>About this item:</b>
              <p className="product-des">{product.descriptions}</p>
              </div>
              <div className="product-size">
                <h5>Select size</h5>
                <ul>
                  <li>S</li>
                  <li>M</li>
                  <li>L</li>
                  <li>XL</li>
                </ul>
              </div>
              <div className='p-button justify-content-start'>
              <Link className="btn-product" to="/cart" onClick={cartButton}>Add to cart <i class="fa fa-shopping-bag" aria-hidden="true"></i></Link>
              <Link className="btn-product-line">Add to wishlist <i class="fal fa-heart"></i></Link>
              </div>

              <div className="extra-info">
                <div className="info-icon">
                   <i class="fa fa-credit-card" aria-hidden="true"></i>
                </div>
                <div className="info-content">
                  <p><span>Payment:</span> Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card, -5% discount in case of payment</p>
                </div>
              </div>
              <div className="extra-info">
                <div className="info-icon">
                  <i class="fa fa-truck" aria-hidden="true"></i>
                </div>
                <div className="info-content">
                  <p><span>Shipping:</span> We ensure your orders are packed with care and delivered quickly to your doorstep, so you can enjoy your purchase without delay.</p>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </section>

    <section className="product-explane">
    <div className="container my-5">
     <div className="row justify-content-center">
      <div className="col-md-10">
           <ul className="nav nav-tabs" id="productTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">Description</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-controls="info" aria-selected="false">Additional information</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Reviews</button>
    </li>
  </ul>
  <div className="tab-content border border-top-0 p-4" id="productTabContent">


    <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
      <div className="row">
        <div className="col-md-4">
          <img src={product.image} alt="Product" class="img-fluid"/>
        </div>
        <div className="col-md-8">
          <strong>{product.name}</strong>
          <p>Stay dry and comfortable no matter where the trail takes you. Our Waterproof Jacket is crafted with lightweight, breathable fabric that shields you from rain, wind, and chilly temperatures without weighing you down. Adjustable cuffs, a high collar, and a secure hood provide extra protection, while its sleek design ensures you move freely and confidently. Whether you’re tackling mountain paths or exploring forest trails, this jacket is your perfect outdoor companion. Durable, water-resistant, and designed for all-day wear, it’s a must-have for every adventurer.</p>

          <strong>Key Features:</strong>
           <ul>
            <li>Fully waterproof and windproof design</li>
            <li>Breathable fabric for comfort during high-intensity hikes</li>
            <li>Adjustable cuffs and hood for customizable protection</li>
            <li>Lightweight and packable for easy travel</li>
            <li>Durable construction built to withstand outdoor challenges</li>
           </ul>
        </div>
      </div>
    </div>

 
    <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
      <ul className="pro-feturs">
        <li>Weight: 420 grams (lightweight for easy packing)</li>
        <li>Material: 100% polyester with a PU waterproof coating</li>
        <li>Water Resistance: 10,000 mm rating for excellent protection</li>
        <li>Breathability: 5,000 g/m²/24hr for sweat control</li>
        <li>Available Colors: Forest Green</li>
        <li>Sizes: S, M, L, XL, XXL</li>
        <li>Features: Adjustable hood, zippered pockets, elastic cuffs, breathable mesh lining</li>
      </ul>
    </div>

  
    <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
      <p className="pro-review"><strong>John D.</strong> ★★★★★<br/>
        Loved the taste! Always my go-to snack for hikes and parties.</p>
      <p className="pro-review"><strong>Sarah M.</strong> ★★★★☆<br/>
        Great chips, though I wish the bag had more chips and less air.</p>
    </div>
  </div>
      </div>
     </div>
     </div>
    </section>

    <section className="related-products">
      <div className="container">
            <div className='section-heading'>
            <h2>You May Also Like</h2>
        </div>
         <div className='row'>
          {productData.slice(0,4).map((item) =>(
               <div className="col-md-3">
        <div className="product-item">
          <div className="product-img text-center">
            <img src={item.image} className="img-fluid product-image" alt={item.name}/>
          </div>
          <div className="product-dtel">
            <div className='rating'>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i> 
            <i className="fa fa-star" aria-hidden="true"></i> 
            <span className="product-rating">({item.reviews})</span>
            </div>
            <h3 className="product-name">{item.name}</h3>
             <div className="price-review">
            <p className="">${item.price} <span>${item.oldPrice}</span></p>
             </div>
          </div>
          <div className='p-button text-center'>
          <Link className="btn-product" to={`/Productdetails/${item.id}`}>Order Now <i class="fa fa-shopping-bag" aria-hidden="true"></i></Link>
          </div>
          <div className='popup-icon'>
            <Link className="item-icon" to="/"><i class="fal fa-heart"></i></Link>
            <Link className="item-icon" to="/"><i class="fal fa-eye"></i></Link>
          </div>
        </div>
              </div>
          ))}
             
            </div>
      </div>
    </section>
      </>
    );
}

export default Productdetails;