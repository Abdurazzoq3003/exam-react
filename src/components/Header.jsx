import React from "react";
import "./header.css";
import ex from "../assets/Exclusive.svg";
import wish from "../assets/wish.svg";
import cart from "../assets/Cart1.svg";
import user from "../assets/user.svg";

export default function Header() {
  return (
    <div className="header">
      <header>
        <div className="header-parent">
          <div className="header-left">
            <img src={ex} alt="" />
            <a href="">Home</a>
            <a href="">Contact</a>
            <a href="">About</a>
            <a href="">Sign Up</a>
          </div>
          <div className="header-right">
            <div className="input-parent">
              <input type="text" placeholder="What are you looking for?" />
            </div>
            <img src={wish} alt="" />
            <img src={cart} alt="" />
            <img src={user} alt="" />
          </div>
        </div>
      </header>
    </div>
  );
}
