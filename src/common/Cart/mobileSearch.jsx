import React from "react";
import { Link } from "react-router-dom";

function mobileSearch({ CartItem }) {
  return (
    <div className="h-full w-full">
      <div className="search-box f_flex">
        <i className="fa fa-search"></i>
        <input type="text" placeholder="Search and hit enter..." />
        <span>All Category</span>
      </div>

      <div className="icon f_flex width ">
        <i className="fa fa-user icon-circle user__icon items-center justify-center flex"></i>
        <div className="cart">
          <Link to="/cart">
            <i className="fa fa-shopping-bag icon-circle"></i>
            <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default mobileSearch;
