import React from "react";

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
                        <li><i class="fa fa-envelope"></i> <a href="/">+012 2345 6789</a></li>
                        <li><i class="fa fa-phone"></i> <a href="/">support@tripgear.com</a></li>
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
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Shop All Products</a></li>
                        <li><a href="/">Blog / Hiking Guides</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">FAQs</a></li>
                       </ul>
                    </div>
                  </div>
                   <div className="col-md-2">
                    <div className="footer-item">
                    <div className="footer-heading">
                    <h5>Customer Support</h5>
                    </div>
                       <ul>
                        <li><a href="/">Shipping & Returns</a></li>
                        <li><a href="/">Order Tracking</a></li>
                        <li><a href="/">Warranty & Repairs</a></li>
                        <li><a href="/">Gift Cards</a></li>
                        <li><a href="/">Care & Maintenance</a></li>
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
                            <li><a href="/"><img src='./images/sol-icon-1.png' alt="sosal"/></a></li>
                            <li><a href="/"><img src='./images/sol-icon-2.png' alt="sosal"/></a></li>
                            <li><a href="/"><img src='./images/sol-icon-3.png' alt="sosal"/></a></li>
                            <li><a href="/"><img src='./images/sol-icon-4.png' alt="sosal"/></a></li>
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
                        <a href="/">Terms and conditions</a>
                        <a href="/">/</a>
                         <a href="/">privacy policy</a>
                    </div>
                </div>
            </div>
         </section>
        </>
    );
}

export default Footer;