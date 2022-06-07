import { Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img
            src="https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70"
            alt=""
          />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
           <Link to="/buynow"> <button className="cart_btn2">By Now</button></Link>
          </div>
        </div>
        <div className="right_cart">
          <h3>Trimmers, Dryers & more</h3>
          <h4>Nova Professional NHP 8220 Hair Dryer (1800 W, Multicolor)</h4>
          <Divider />
          <p className="mrp">M.R.P : 1899</p>
          <p>
            Deal of the day : <span style={{ color: "#812704" }}>1124.00</span>{" "}
            </p>
          <p>
            You save : : <span style={{ color: "#812704" }}> ₹499</span>{" "}
            </p>
            <div className="discount_box">
          <h5>
            Discount : <span style={{ color: "#111" }}>Expra 10% off</span>
          </h5>
          <h4>
            Free Delivery :
            <span style={{ color: "#111", fontWeight: 600 }}> oct 8 - 21</span> Details
          </h4>
          <p>Fastest delavery : <span style={{ color: "#111", fontWeight: 600 }}>Tomorrow 11AM</span> </p>
        </div>
        <p className="description">About the Item : <span style={{ color: "#565959",fontSize: 14,letterSpacing:"0.4px", fontWeight: 500 }}>The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.</span> </p>
        </div>

        
      </div>
    </div>
  );
};

export default Cart;
