import React from "react";

function Faq(){
    return(
        <>
        <section className="faq-section">
            <div className="container">
                 <div className='section-heading'>
            <h2 className="mb-5">Frequently Asked Questions</h2>
        </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                       <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What makes your hiking gear different from others?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Our hiking gear is designed with durability, comfort, and safety as top priorities. Each product undergoes rigorous testing in real outdoor conditions to ensure it performs well on every trail. Whether you’re tackling a short day hike or a multi-day trek, our gear is built to provide long-lasting support and reliability.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Do you offer free shipping?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       Yes, we offer free standard shipping on all domestic orders above $99. This way, you can stock up on hiking essentials without worrying about extra costs. For smaller orders, standard shipping fees apply, and we also provide expedited options if you need your gear faster.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Can I return or exchange a product if it doesn’t fit?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Absolutely. We understand that sometimes a product might not be the perfect fit. That’s why we provide a 30-day return and exchange policy. As long as the product is unused and in its original condition, you can easily return it for a refund or exchange it for a different size or style.
      </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Are your backpacks and tents waterproof?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       Most of our backpacks and tents are designed with water-resistant or fully waterproof materials to withstand unpredictable weather conditions. Product descriptions include specific waterproof ratings, so you can choose the level of protection you need based on your hiking or camping destination.
      </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        How do I choose the right hiking boots size?
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        For the best fit, we recommend ordering your regular shoe size. However, if you have wider feet or plan to wear thicker hiking socks, going half a size up is often more comfortable. Each product page also includes a size guide to help you find the perfect fit for your adventure.
      </div>
    </div>
  </div>
</div>
                    </div>

                    <div className="col-md-4">
                      <div className="faq-model">
                        <img src="./images/faq.jpg" alt="faq-model"/>
                      </div>
                    </div>
                </div>
            </div>
       </section>
        </>
    );
}

export default Faq;