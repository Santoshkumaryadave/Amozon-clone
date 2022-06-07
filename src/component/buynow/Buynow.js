import { Divider } from "@mui/material";
import React from "react";
import "./buynow.css";
import Option from "./Option";
import Rightbuy from "./Rightbuy";
import Subtotal from "./Subtotal";

const Buynow = () => {
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Sopping Cart</h1>
          <p>Select all items</p>
          <span className="leftbuyprice">Price</span>
          <Divider />
          <div className="item_containert">
            <img
              src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70"
              alt=""
            />
            <div className="item_details">
              <h3>Pigeon FAVOURITE Electric Kettle (1.5 L, Silver, Black)</h3>
              <h3>'Home & Kitchen'</h3>
              <h3 className="diffrentprice">625.00</h3>
              <p className="unusuall">Usually dispatched in 8 days</p>
              <p>Eligible for free shopping</p>
              <img
                src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                alt="logo"
              />
              <Option />
            </div>
            <h3 className="item_price">625.00</h3>
          </div>
          <Divider />
          <Subtotal/>
        </div>
        <div className="right_buy">
        <Rightbuy/>
        </div>
      </div>
    </div>
  );
};

export default Buynow;
