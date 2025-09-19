import React from "react";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <>
         <section className="footer">
            <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="footer-item px-3">
                    <div className="footer-heading">
                        <h5>Get in Touch with Us</h5>
                        </div>
                        <p>Have questions about our products, your order, or need hiking gear advice? We’re here to help you every step of the way.</p>
                       <ul>
                        <li><i class="fa fa-envelope"></i> <Link to="/">+012 2345 6789</Link></li>
                        <li><i class="fa fa-phone"></i> <Link to="/">support@tripgear.com</Link></li>
                        <li><i class="fa fa-clock"></i> Monday till Friday 10 to 6 EST</li>
                       </ul>
                    </div>
                  </div>
                   <div className="col-md-2">
                    <div className="footer-item">
                    <div className="footer-heading">
                    <h5>Quick Links</h5>
                    </div>
                       <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop All Products</Link></li>
                        <li><Link to="/blog">Blog / Hiking Guides</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                        <li><Link to="/faqpage">FAQ</Link></li>
                       </ul>
                    </div>
                  </div>
                   <div className="col-md-2">
                    <div className="footer-item">
                    <div className="footer-heading">
                    <h5>Customer Support</h5>
                    </div>
                       <ul>
                        <li><Link to="/">Shipping & Returns</Link></li>
                        <li><Link to="/">Order Tracking</Link></li>
                        <li><Link to="/">Warranty & Repairs</Link></li>
                        <li><Link to="/">Gift Cards</Link></li>
                        <li><Link to="/">Care & Maintenance</Link></li>
                       </ul>
                    </div>
                  </div>
                   <div className="col-md-4">
                    <div className="footer-item px-3">
                    <div className="footer-heading">
                    <h5>Newsletter</h5>
                    </div>
                      <p>Get 15% off your first purchaxse! Plus, be the first to know about sales new product launches and exclusive offers!</p>
                      <div className="news-mail">
                        <input type="text" placeholder="Your Email Address"/>
                        <button type="submeet"><i class="fa fa-long-arrow-right"></i></button>
                      </div>

                      <div className="sosal-link">
                        <ul>
                            <li><Link to="/"><img src='./images/sol-icon-1.png' alt="sosal"/></Link></li>
                            <li><Link to="/"><img src='./images/sol-icon-2.png' alt="sosal"/></Link></li>
                            <li><Link to="/"><img src='./images/sol-icon-3.png' alt="sosal"/></Link></li>
                            <li><Link to="/"><img src='./images/sol-icon-4.png' alt="sosal"/></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-bootm">
                    <p>Copyright © 2025 Tripgear. All Right reserved</p>
                    <div className="card-footer">
                         <ul>
                        <li><img src="./images/visa.png" alt="payment-card"/></li>
                        <li><img src="./images/discover.png" alt="payment-card"/></li>
                        <li><img src="./images/master.png" alt="payment-card"/></li>
                        <li><img src="./images/paypel.png" alt="payment-card"/></li>
                    </ul>
                    </div>
                    <div className="bottom-link">
                        <Link to="/">Terms and conditions</Link>
                        <Link to="/">/</Link>
                         <Link to="/">privacy policy</Link>
                    </div>
                </div>
            </div>
         </section>
        </>
    );
}

export default Footer;