import React from "react";
import { Link } from "react-router-dom";
import productData from '../Data/productData';

function Shop(){
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

    <div className="all-products">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className='section-heading mt-3'>
                     <h2>Apply Filters</h2>
                     </div>
                     <div className="filter-section">
                        <h3>Choose your categore</h3>

                        <ul>
                            <li className="filter-item">
                                <Link to='/' className="filter-link">Backpacks</Link> <img src="./images/filter/fil-1.png" alt="filter-model"/>
                            </li>
                            <li className="filter-item">
                                 <Link to='/' className="filter-link">Baselayers</Link> <img src="./images/filter/fil-2.png" alt="filter-model"/>
                            </li>
                            <li className="filter-item">
                                 <Link to='/' className="filter-link">Camping Tents</Link> <img src="./images/filter/fil-3.png" alt="filter-model"/>
                            </li>
                            <li className="filter-item">
                                 <Link to='/' className="filter-link">Camp Kitchen</Link> <img src="./images/filter/fil-4.png" alt="filter-model"/>
                            </li>
                            <li className="filter-item">
                                 <Link to='/' className="filter-link">Climbing</Link> <img src="./images/filter/fil-5.png" alt="filter-model"/>
                            </li>
                            <li className="filter-item">
                                 <Link to='/' className="filter-link">Sleeping Mats</Link> <img src="./images/filter/fil-6.png" alt="filter-model"/>
                            </li>
                        </ul>
                     </div>
                </div>



                <div className="col-md-9">
                    <div className="row">

                 {productData.map((item) =>(
               <div className="col-md-4">
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
           <div className='popup-icon'>
                      <Link className="item-icon" to="/"><i class="fal fa-heart"></i></Link>
                      <Link className="item-icon" to="/"><i class="fal fa-eye"></i></Link>
                    </div>
          </div>
        </div>
              </div>
          ))}
          </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Shop;