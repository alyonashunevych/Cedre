import React from 'react'

export default function Delivery() {
  window.scrollTo(0, 0);
  return (
    <div className='content'>
      <div className="delmain">
        <h2>Delivery</h2>
        <div className='del_box'>
          <div className='del_box2'>
            <p className="del_tit">Delivery in Ukraine</p>
            <div className='boxd1'>
              <p className="del_tit2">Courier Services:</p>
              <p className="del_text">We offer fast and reliable delivery services within Ukraine through our trusted courier partners. Enjoy the convenience of having your order delivered right to your doorstep.</p>
            </div>
            <div className='boxd1'>
              <p className="del_tit2">Delivery Time:</p>
              <p className="del_text">Expect your package to arrive within 2-5 business days from the date of order confirmation. Our team works diligently to ensure swift processing and dispatch.</p>
            </div>
            <div className='boxd1'>
              <p className="del_tit2">Shipping Costs:</p>
              <p className="del_text">We provide transparent shipping costs, which are calculated based on your location and the weight of your order. The exact shipping fee will be displayed at the checkout before you finalize your purchase.</p>
            </div>
            <div className='boxd1'>
              <p className="del_tit2">Tracking Your Order:</p>
              <p className="del_text">Upon dispatch of your order, you will receive a tracking number, allowing you to monitor the status of your shipment. Follow the journey of your product from our store to your doorstep.</p>
            </div>
          </div>
          <div className='del_box2'>
            <p className="del_tit">International Shipping</p>
            <div className='boxd1'>
              <p className="del_tit2">Destinations:</p>
              <p className="del_text">We proudly ship our products to various countries around the world. To check if we deliver to your location, please enter your address during the checkout process.</p>
            </div>
            <div className='boxd1'>
              <p className="del_tit2">International Courier Partners:</p>
              <p className="del_text">For our international customers, we collaborate with reputable courier services to ensure secure and timely delivery. We understand the importance of a smooth shipping process for our global clientele.</p>
            </div>
            <div className='boxd1'>
              <p className="del_tit2">Shipping Duration:</p>
              <p className="del_text">Delivery times for international orders may vary depending on your location and the shipping method chosen. Typically, you can expect your package to arrive within 7-14 business days. Please note that customs processing may extend delivery times.</p>
            </div>
            <div className='boxd1'>
              <p className="del_tit2">Tracking Your Order:</p>
              <p className="del_text">Once your order is dispatched, you will receive a tracking number to monitor the status of your shipment. Stay informed about the journey of your purchase from our store to your doorstep.</p>
            </div>
          </div>
        </div>
        <div className='buttons_box'>
          <a href="https://novaposhta.ua/delivery" target="_blank" rel="noreferrer" style={{ width: '100%'}}><button className="see_more"style={{ width: '100%'}}>Сalculate the cost of delivery</button></a>
          <a href="https://novaposhta.ua/calculatorinternational" target="_blank" rel="noreferrer"style={{ width: '100%'}}><button className="see_more" style={{ width: '100%'}}>Сalculate the cost of international shipping</button></a>
        </div>
        <p className="thanks">Thank you for shopping with us!</p>
      </div>
    </div>
  )
}
