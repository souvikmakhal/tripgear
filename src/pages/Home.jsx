import React from 'react';
import { Link } from 'react-router-dom';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial';
import productData from '../Data/productData';

function Home(){
    
    
    function wishbutton (product)  {
          let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
          const exestingItem = wishlist.find((Item) => Item.id === product.id);
          if (exestingItem){
                   exestingItem.quantity +=1;
          }
          else {
            wishlist.push({...product,quantity:1});
          }
          localStorage.setItem("wishlist", JSON.stringify(wishlist));
        } 
        
    return(
     <>
     <section className='hero'>
        <div className='container hero-banner'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='hero-content'>
                        <h3>Welcome to Tripgear</h3>
                        <h2>Gear Up for Your Next Adventure</h2>
                        <p>Discover premium hiking essentials built for durability, comfort, and performance.</p>
                        <a className='btn-index' href='shop'>Shop Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
            <div className='counter'>
                <div className='counter-content'>
                     <div className='counter-item'>
                            <h4><span>16</span>K+</h4>
                            <p>Satisfied Customers</p>
                        </div>
                        <div className='counter-item'>
                            <h4><span>8</span>years+</h4>
                            <p>Experience</p>
                        </div>
                        <div className='counter-item'>
                            <h4><span>25</span>+</h4>
                            <p>Retail & Online Stores</p>
                        </div>
                </div>
            </div>
        </div>
     </section>
     <section className='category'>
     <div className='container'>
        <div className='section-heading'>
            <h2>Shop by Category</h2>
        </div>
        <div className='row'>
            <div className='col-md-2'>
                <div className='item-category'>
                    <div className='item-category-img'>
                    <img src='./images/cat-1.png' alt="logo"/>
                    </div>
                    <h4>Backpacks</h4>
                    <p>36 Products</p>
                </div>
            </div>
            <div className='col-md-2'>
                <div className='item-category'>
                    <div className='item-category-img'>
                    <img src='./images/cat-2.png' alt="logo"/>
                    </div>
                    <h4>Baselayers</h4>
                    <p>50 Products</p>
                </div>
            </div>
            <div className='col-md-2'>
                <div className='item-category'>
                    <div className='item-category-img'>
                   <img src='./images/cat-3.png' alt="logo"/>
                    </div>
                    <h4>Camping Tents</h4>
                    <p>15 Products</p>
                </div>
            </div>
            <div className='col-md-2'>
                <div className='item-category'>
                    <div className='item-category-img'>
                    <img src='./images/cat-4.png' alt="logo"/>
                    </div>
                    <h4>Camp Kitchen</h4>
                    <p>56 Products</p>
                </div>
            </div>
            <div className='col-md-2'>
                <div className='item-category'>
                    <div className='item-category-img'>
                    <img src='./images/cat-5.png' alt="logo"/>
                    </div>
                    <h4>Climbing</h4>
                    <p>25 Products</p>
                </div>
            </div>
            <div className='col-md-2'>
                <div className='item-category'>
                    <div className='item-category-img'>
                    <img src='./images/cat-6.png' alt="logo"/>
                    </div>
                    <h4>Sleeping Mats</h4>
                    <p>10 Products</p>
                </div>
            </div>
        </div>
     </div>
     </section>
     <section className='new-arrive'>
     <div className='container'>
        <div className='section-heading'>
            <h2>Our New Arrivals</h2>
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
     <section className='brand'>
        <div className='container'>
            <div className='row'>
                <div className='brand-item'>
                 <img src='./images/brand-1.png' alt='brand name'/>
                 <img src='./images/brand-2.png' alt='brand name'/>
                 <img src='./images/brand-3.png' alt='brand name'/>
                 <img src='./images/brand-4.png' alt='brand name'/>
                 <img src='./images/brand-5.png' alt='brand name'/>
                  <img src='./images/brand-2.png' alt='brand name'/>
                 <img src='./images/brand-6.png' alt='brand name'/>
                 <img src='./images/brand-7.png' alt='brand name'/>
                </div>
            </div>
        </div>
     </section>
     <section className='offer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='discount-banner'>
                        <img src='./images/offer.jpg' alt='offers'/>
                        <div className='discount-content'>
                            <div className='discount-detils'>
                          <span>UP TO</span>
                          <h4>40% <span>OFF</span></h4>
                          <p>On All Camping Items</p>
                          </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='discount-items'>
                        <div className='row'>
                             {productData.slice(6,10).map((item) =>(
               <div className="col-md-6">
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
            <Link className="item-icon"  onClick={() => wishbutton(item)}><i class="fal fa-heart"></i></Link>
            <Link className="item-icon" to="/"><i class="fal fa-eye"></i></Link>
          </div>
        </div>
              </div>
          ))}
                        </div>
                    </div>
                </div>
            </div>
            </div>
     </section>
     <Testimonial/>
     <Faq/>
   
     </>
    );
}

export default Home;