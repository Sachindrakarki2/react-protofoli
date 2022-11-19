import React from "react";
import sach from "../image/sac.png";
import { LayOut } from "./LayOut";
export const AboutMe = () => {
  return (
    <LayOut>
      <section id="about" className="container">
        <div className="title">
          <span>About Me</span>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <img src={sach} alt="some img" width="100%" />
          </div>
          <div className="col-md-8">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ipsam
              ad fuga, cumque qui fugit inventore vel deleniti minus tempore
              officiis eius blanditiis iusto perferendis officia odit atque
              asperiores soluta.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ipsam
              ad fuga, cumque qui fugit inventore vel deleniti minus tempore
              officiis eius blanditiis iusto perferendis officia odit atque
              asperiores soluta.
            </p>
          </div>
        </div>
      </section>
    </LayOut>
  );
};
