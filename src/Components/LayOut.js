import React from "react";
import { Fotter } from "./Fotter";
import { TopNav } from "./TopNav";

export const LayOut = ({ children }) => {
  return (
    <div>
      <TopNav />
      <div className="main-layout">{children}</div>
      <Fotter />
    </div>
  );
};
