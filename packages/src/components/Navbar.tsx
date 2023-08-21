import React, { Component } from "react";
import logo from "./assets/logo.svg";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container-navbar">
        <div className="left">
          <img src={logo} alt="" className="company-logo" />
          <NavLink to="/home" className={({isActive})=>isActive? "active link" :"link"}>
            Home
          </NavLink>
        </div>
        <div className="ty">
          <div className="mid">
            <NavLink to="/favourites" className={({isActive})=>isActive? "active link" :"link"}>
              Favourites
            </NavLink>
          </div>
          <div className="right">
            <img
              src={require("./assets/profile-pic.jpg")}
              className="profile-pic"
            />
            <img
              width="10"
              height="10"
              src="https://img.icons8.com/metro/26/expand-arrow.png"
              alt="expand-arrow"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;