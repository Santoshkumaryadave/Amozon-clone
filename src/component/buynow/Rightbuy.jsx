import React from 'react'

const Rightbuy = () => {
  return (
    <div className='right_buy'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="rightimg" />
        <div className="cost_right">
            <p>Your Order is eligble for free Delivery</p> <br />
            <span style={{color:"#565959"}}>Select this option at checkout. Details</span>
            <h3>
        Subtotal (1 items) :
        <span style={{ fontWight: 700, color: "#111" }}> span Rs625 </span>
      </h3>
      <button className='rightbuy_btn'>Process to Buy</button>
       <div className="emi">
           Emi available
       </div>
        </div>
    </div>

  )
}

export default Rightbuy