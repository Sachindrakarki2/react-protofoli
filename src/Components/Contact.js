import React from "react";

export const Contact = () => {
  return (
    <div id="contact" className="container contact rounded-5 p-3 mt-5">
      <div className="title">
        <span>Contact Me</span>
      </div>

      {/* <!-- icons to links --> */}
      <div className="row mb-5">
        <div className="col fa-3x d-flex justify-content-between px-5">
          {/* <!-- <a href="tel:041234567"><i className="fa-solid fa-mobile"></i></a> --> */}
          <a href="mailto:your@email.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/prem-acharya/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
