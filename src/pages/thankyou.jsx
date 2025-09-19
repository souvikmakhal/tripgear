import React from "react";

function Thankyou(){
    return(
        <>
         <div className="thank-sec">
        <div className="container">
            <div className="row justify-content-end">
                <div className="col-md-6">
                   <div className="thanks-content">
                    <h1>Thank you for your order</h1>
                    <a className='btn-index' href='/shop'>Continew Shoping<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                   </div>
                </div>
            </div>
            
        </div>
        </div>
        
        </>
    );
}

export default Thankyou;