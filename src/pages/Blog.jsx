import React from "react";
import { Link } from "react-router-dom";

function Blog(){
    return(
        <>
         <section className="inner-banner">
        <div className="container inner-back">
            <div className="row justify-content-center">
               <div className="col-md-8">
                <div className="inner-heading">
                    <h4>Latest Stories & Tips</h4>
                    <p>Adventure Starts with the Right Gear</p>
                </div>
                    <nav aria-label="breadcrumb">
                       <ol class="breadcrumb">
                          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                              <li class="breadcrumb-item active" aria-current="page">Blog</li>
                        </ol>
                              </nav> 
               </div>
            </div>
        </div>
    </section>
        <div className="blog-sec">
          <div className="container">
            <div className='section-heading'>
            <h2>Adventure Insights</h2>
        </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="blog-item">
                        <div className="blog-img">
                        <img src="./images/blog-1.webp" alt="blog"/>
                        </div>
                        <div className="blog-date">
                          <p>Mar 24, 2025</p>
                        </div>
                        <div className="blog-heading">
                          <h5>Conquering the Elements: A Guide to Extreme Adventure with Rab Clothing</h5>
                        </div>
                        <div className="blog-conten">
                           <p>High-altitude hiking, mountaineering, and winter expeditions push you to the most remote and inhospitable corners of the planet, where the environment itself becomes your greatest adversary.</p>
                        </div>
                    </div>
                </div>
                 <div className="col-md-4">
                    <div className="blog-item">
                        <div className="blog-img">
                        <img src="./images/blog-2.webp" alt="blog"/>
                        </div>
                        <div className="blog-date">
                          <p>Nov 25, 2024</p>
                        </div>
                        <div className="blog-heading">
                          <h5>A Season of Firsts in Khyam Lungpa</h5>
                        </div>
                        <div className="blog-conten">
                           <p>I noticed the Khyam Lungpa Valley, a relatively unknown slice of Ladakh. A handful of unclimbed 6000m peaks within a short trek from the road? It was too tempting to pass up.</p>
                        </div>
                    </div>
                </div>
                 <div className="col-md-4">
                    <div className="blog-item">
                        <div className="blog-img">
                        <img src="./images/blog-3.webp" alt="blog"/>
                        </div>
                        <div className="blog-date">
                          <p>Aug 07, 2024</p>
                        </div>
                        <div className="blog-heading">
                          <h5>The Importance of Layering: How to Dress Effectively for Hiking</h5>
                        </div>
                        <div className="blog-conten">
                           <p>Adventuring in the great outdoors brings with it the promise of fresh mountain air, breathtaking vistas, and the thrill of conquering a challenging trail.</p>
                        </div>
                    </div>
                </div>
                 <div className="col-md-4">
                    <div className="blog-item">
                        <div className="blog-img">
                        <img src="./images/blog-4.webp" alt="blog"/>
                        </div>
                        <div className="blog-date">
                          <p>Jan 31, 2024</p>
                        </div>
                        <div className="blog-heading">
                          <h5>The Essential Jacket Trio for your next winter adventure!</h5>
                        </div>
                        <div className="blog-conten">
                           <p>Scaling peaks or just out for a leisurely hike, having the right winter jackets in your arsenal can make all the difference. </p>
                        </div>
                    </div>
                </div>
                 <div className="col-md-4">
                    <div className="blog-item">
                        <div className="blog-img">
                        <img src="./images/blog-5.webp" alt="blog"/>
                        </div>
                        <div className="blog-date">
                          <p>Nov 24, 2023</p>
                        </div>
                        <div className="blog-heading">
                          <h5>Unveiling Hidden Gems: Lesser-Known Winter Adventures in India</h5>
                        </div>
                        <div className="blog-conten">
                           <p>Forget the over-done, touristy locations that appear on every Instagram bucket list.</p>
                        </div>
                    </div>
                </div>
                 <div className="col-md-4">
                    <div className="blog-item">
                        <div className="blog-img">
                        <img src="./images/blog-6.webp" alt="blog"/>
                        </div>
                        <div className="blog-date">
                          <p>Dec 11, 2021</p>
                        </div>
                        <div className="blog-heading">
                          <h5>Take on the trail: Tips on physically preparing your body for a trek</h5>
                        </div>
                        <div className="blog-conten">
                           <p>Gearing up for a long trek isn't just about packing the right gear; it's also about preparing your body for what's to come! </p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
          
        </>
    )
}

export default Blog;