import React, { useState } from "react";
import Categories from "../../components/MainPage/Categories";
import ResponsiveComponent from "../../hooks/UseResponsive";

const CategoriesDrop = () => {
  const [isDropDown, setIsDropDown] = useState(false);

  // Use state variable in component logic
  const toggleDropDown = () => {
    setIsDropDown((prevIsDropDown) => !prevIsDropDown);
  };

  const width = ResponsiveComponent();

  return (
    <div className="categories justify-center items-center flex flex-row ">
      <span className="fa-solid fa-border-all"></span>
      <h4 onClick={toggleDropDown}>
        Categories{" "}
        <i className={`fa fa-chevron-${isDropDown ? "down" : "up"}`}></i>
        {isDropDown && width <= 900 ? (
          <div className="drop__category transition-all duration-500 ease-in-out z-[999] ">
            <Categories className="z-50" />
          </div>
        ) : (
          ""
        )}
      </h4>
    </div>
  );
};

export default CategoriesDrop;
