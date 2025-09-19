import React from "react";
import { Link } from "react-router-dom";

function ContactUs(){
    return(
        <>
            <div className="contact-sec">
                <section className="inner-banner">
        <div className="container inner-back">
            <div className="row justify-content-center">
               <div className="col-md-8">
                <div className="inner-heading">
                    <h4>Contact Us</h4>
                    <p>Adventure Starts with the Right Gear</p>
                </div>
                    <nav aria-label="breadcrumb">
                       <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                              <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                        </ol>
                              </nav> 
               </div>
            </div>
        </div>
    </section>



                 <div className="container my-5">
    <h2 className="mb-4 text-center">Contact Us</h2>
    <p className="text-center">We’re here to assist you! If you have any questions or need advice, <br/> please fill out the form below with your details, and we'll get back to you soon.</p>
   
    <div className="row justify-content-center mt-4">
      <div className="col-md-8">
        <form>
          <div className="mb-3">
            <label for="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>
          <div class="mb-3">
            <label for="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div class="mb-3">
            <label for="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="5" placeholder="Your message..." required></textarea>
          </div>
          <Link className="btn-product" >Send Messages<i class="fa fa-paper-plane" aria-hidden="true"></i></Link>
        </form>
      </div>
    </div>
  </div>
            </div>
        </>
    )
}

export default ContactUs;