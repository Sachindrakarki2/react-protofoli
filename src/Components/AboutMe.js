import React from "react";
import sach from "../image/sac.png";
import { LayOut } from "./LayOut";
export const AboutMe = () => {
  return (
    <LayOut>
      <section id="about" className="containe">
        <div className="title text-white">
          <span>About Me</span>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <img src={sach} alt="some img" width="100%" />
          </div>
          <div className="col-md-8 text-white">
            <p>
              Hi My name is Sachindra Karki. I graduated from Crown Institute of
              Higher Education in Bachlour in Information Technology .Currently,
              I am enrolled in Dented Code Academy Bootcamp to boost my career
              in Software Development. I enjoy developing live Application on
              the internet.
            </p>
            <p>
              Other than coding, I spent most of my free time playing games.
            </p>
          </div>
        </div>
      </section>
    </LayOut>
  );
};
