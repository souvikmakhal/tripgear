import React from "react";

function Testimonial(){
    return(
      <div className="testimonial">
       <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="container">
         <div className='section-heading'>
            <h2>Real Stories. Real Adventures.</h2>
        </div>
        </div>
    <div className="carousel-item active">
      <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="testimonial-item">
            <div className="client-details">
              <img src="./images/client1.jpg" alt="client"/>
              <div className="client-addres">
                <h5>— Sarah M.</h5>
                <p>Colorado, USA</p>
              </div> 
              </div>
              <div className="client-comment"> 
                <h5>The best hiking boots I’ve ever owned!</h5>
                <p>These boots carried me through a 5-day trek in the Rockies without a single blister. Durable, comfortable, and reliable — I’ll never hike without them again.</p>
              </div>
          </div>
        </div>
         <div className="col-md-4">
          <div className="testimonial-item">
            <div className="client-details">
              <img src="./images/client2.jpg" alt="client"/>
              <div className="client-addres">
                <h5>— James R.</h5>
                <p>Oregon, USA</p>
              </div>
              </div>
              <div className="client-comment">
                <h5>Lightweight and super practical backpack.</h5>
                <p>I bought the Trailblazer Backpack and it’s perfect for day hikes. It fits all my gear, feels light, and the waterproof material kept my things dry during a sudden storm.</p>
            </div>
          </div>
        </div>
         <div className="col-md-4">
          <div className="testimonial-item">
            <div className="client-details">
              <img src="./images/client3.jpg" alt="client"/>
              <div className="client-addres">
                <h5>— Emily T.</h5>
                <p>New York, USA</p>
              </div>
              </div>
              <div className="client-comment">
                <h5>Fast shipping and excellent support.</h5>
                <p>My tent arrived earlier than expected, and the customer support team helped me choose the right one for my camping trip. Setup was quick and easy</p>
              </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="carousel-item">
       <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="testimonial-item">
            <div className="client-details">
              <img src="./images/client4.jpg" alt="client"/>
              <div className="client-addres">
                <h5>— Sarah M.</h5>
                <p>Colorado, USA</p>
              </div>
              </div>
              <div className="client-comment">
                <h5>The best hiking boots I’ve ever owned!</h5>
                <p>These boots carried me through a 5-day trek in the Rockies without a single blister. Durable, comfortable, and reliable — I’ll never hike without them again.</p>
              </div>
          </div>
        </div>
         <div className="col-md-4">
          <div className="testimonial-item">
            <div className="client-details">
              <img src="./images/client5.jpg" alt="client"/>
              <div className="client-addres">
                <h5>— James R.</h5>
                <p>Oregon, USA</p>
              </div>
              </div>
              <div className="client-comment">
                <h5>Lightweight and super practical backpack.</h5>
                <p>I bought the Trailblazer Backpack and it’s perfect for day hikes. It fits all my gear, feels light, and the waterproof material kept my things dry during a sudden storm.</p>
            </div>
          </div>
        </div>
         <div className="col-md-4">
          <div className="testimonial-item">
            <div className="client-details">
              <img src="./images/client6.jpg" alt="client"/>
              <div className="client-addres">
                <h5>— Emily T.</h5>
                <p>New York, USA</p>
              </div>
              </div>
              <div className="client-comment">
                <h5>Fast shipping and excellent support.</h5>
                <p>My tent arrived earlier than expected, and the customer support team helped me choose the right one for my camping trip. Setup was quick and easy.</p>
              </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="carousel-item">
       <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="testimonial-item">
            <div className="client-details">
              <img src="./images/client7.jpg" alt="client"/>
              <div className="client-addres">
                <h5>— Sarah M.</h5>
                <p>Colorado, USA</p>
              </div>
              </div>
              <div className="client-comment">
                <h5>The best hiking boots I’ve ever owned!</h5>
                <p>These boots carried me through a 5-day trek in the Rockies without a single blister. Durable, comfortable, and reliable — I’ll never hike without them again.</p>
              </div>
          </div>
        </div>
         <div className="col-md-4">
          <div className="testimonial-item">
            <div className="client-details">
              <img src="./images/client8.jpg" alt="client"/>
              <div className="client-addres">
                <h5>— James R.</h5>
                <p>Oregon, USA</p>
              </div>
              </div>
              <div className="client-comment">
                <h5>Lightweight and super practical backpack.</h5>
                <p>I bought the Trailblazer Backpack and it’s perfect for day hikes. It fits all my gear, feels light, and the waterproof material kept my things dry during a sudden storm.</p>
            </div>
          </div>
        </div>
         <div className="col-md-4">
          <div className="testimonial-item">
            <div className="client-details">
              <img src="./images/client9.jpg" alt="client"/>
              <div className="client-addres">
                <h5>— Emily T.</h5>
                <p>New York, USA</p>
              </div>
              </div>
              <div className="client-comment">
                <h5>Fast shipping and excellent support.</h5>
                <p>My tent arrived earlier than expected, and the customer support team helped me choose the right one for my camping trip. Setup was quick and easy.</p>
              </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
</div>
    );
}


export default Testimonial