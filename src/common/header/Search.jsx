import React from "react";
import logo from "../../components/assets/images/logo.png";
import { Link } from "react-router-dom";
import CategoriesDrop from "./CategoriesDrop";
import ResponsiveComponent from "../../hooks/UseResponsive";
import { BsShop } from "react-icons/bs";

import mobileSearch from "../Cart/mobileSearch";

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  const width = ResponsiveComponent();

  return (
    <>
      <section className="search h-full ">
        <div className="container c_flex gap-6">
          <Link to="/" className=" w-32 lg:w-56">
            <img src={logo} alt="" className=" w-56" />
          </Link>

          {width <= 768 ? (
            <Link to = "/mobileSearch">
              <BsShop className=" text-2xl font-semibold" />
            </Link>
            
          ) : (
            <>
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
            </>
          )}
        </div>
      </section>
      <CategoriesDrop />
    </>
  );
};

export default Search;
