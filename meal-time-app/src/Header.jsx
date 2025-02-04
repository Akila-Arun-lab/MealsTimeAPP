import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { NavLink } from "react-router"; 

function Header() {

  return (
    <div class="container p-0">
      <div class="d-flex flex-row  p-3" style={{"width": "100%", "border": "1px solid white"}}>
        <div style={{"width": "66%", "margin-left": "3rem"}}>
          <h1 style={{"color": "#ffff"}}>Place Your Order Now!!!</h1>
        </div>
        <nav class="navbar navbar-expand-md">
          <button class="navbar-toggler" style={{"color": "#ffff"}} type="button" 
            data-toggle="collapse" data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" style={{"color": "#ffff"}}></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto" style={{"fontSize": "20px"}}>
                <li class="nav-item active">
                  <a class="nav-link" style={{"color": "#ffff"}} href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" style={{"color": "#ffff"}} href="/foodlisting">Menu</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" style={{"color": "#ffff"}} href="/cart">Cart</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" style={{"color": "#ffff"}} href="/login">Login</a>
                </li>
              </ul>
            </div>
          </nav>
      </div>
    </div>
  );
}
export default Header;