import React from "react";
import Sachindra from "../image/sac.png";
import { LayOut } from "./LayOut";
export const Hiro = () => {
  return (
    <LayOut>
      <section className="hero">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-5 text-center order-md-2">
              <img src={Sachindra} alt="my image" width="90%" />
            </div>

            <div className="col-md-7 mt-5 pt-5">
              hi 👋 i'm
              <span className="fw-bold">Sachindra Karki</span>
              <div className="mt-2 mb-5 fs-3 fw-bold">Front-end Developer</div>
              <p>
                I love codiong and solving problems with code and teaching to
                other what i know that makes me feel happy
              </p>
              <button className="btn btn-danger">
                Download Resume <i className="fa-solid fa-download"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
};
