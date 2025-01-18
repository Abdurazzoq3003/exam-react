import React from "react";
import "./card.css";
import frame from "../assets/frame.png";
import cart from "../assets/Cart1 (1).svg";
import star from "../assets/Star.svg";

export default function Card(prop) {
  console.log(prop);
  return (
    <div className="card">
      <div className="card-header">
        <img src={prop.img} alt="jpg" />
        <button>
          <img className="img" src={cart} alt="" /> Add To Cart
        </button>
      </div>

      <div className="card-body">
        <h4>{prop.name}</h4>
        <p>
          <span className="toq">{prop.price}$</span>
          <span className="bir">$1160</span>
        </p>
        <img src={star} alt="" />
      </div>
    </div>
  );
}
