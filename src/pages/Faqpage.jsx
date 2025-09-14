import React from "react";
import { Link } from "react-router-dom";
import Faq from "../components/Faq";

function Faqpage(){
    return(
        <>
         <section className="inner-banner">
                <div className="container inner-back">
                    <div className="row justify-content-center">
                       <div className="col-md-8">
                        <div className="inner-heading">
                            <h4>Frequently Asked Questions</h4>
                            <p>Adventure Starts with the Right Gear</p>
                        </div>
                            <nav aria-label="breadcrumb">
                               <ol class="breadcrumb">
                                  <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                      <li class="breadcrumb-item active" aria-current="page">FAQ</li>
                                </ol>
                                      </nav>
                       </div>
                    </div>
                </div>
            </section>
          <Faq/>
        </>
    )
}

export default Faqpage;