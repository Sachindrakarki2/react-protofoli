import React from "react";

export const LayOut = ({ children }) => {
  return (
    <>
      {children}
      <footer className="bg-dark text-light p-5 text-center mt-5">
        Copyright &copy; All right Reserved. Made with 💓 by me 🤷‍♀️
      </footer>

      <a href="#navbar" id="goup">
        <i className="fa-solid fa-circle-up"></i>
      </a>
    </>
  );
};
