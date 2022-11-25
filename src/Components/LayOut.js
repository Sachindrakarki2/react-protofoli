import React from "react";
import { Container } from "react-bootstrap";
import { Fotter } from "./Fotter";
import { TopNav } from "./TopNav";

export const LayOut = ({ children }) => {
  return (
    <di>
      <TopNav />
      <div className="main-layout">{children}</div>
      <Fotter />
    </di>
  );
};
