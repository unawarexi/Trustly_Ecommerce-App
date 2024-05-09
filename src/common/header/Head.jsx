import React from "react";

import ResponsiveComponent from "../../hooks/UseResponsive";

const Head = () => {
  const width = ResponsiveComponent();
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label> +1384 3456 7374</label>
            <i className="fa fa-envelope"></i>
            <label> support@trustlyshop.com</label>
          </div>

          {width <= 768 ? (
           ""
          ) : (
            <div className="right row RText">
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>

            <span>🏳️‍⚧️</span>
            <label>EN</label>

            <span>🏳️‍⚧️</span>
            <label>USD</label>
          </div>
            
          )}
        </div>
      </section>
    </>
  );
};

export default Head;
