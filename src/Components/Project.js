import React from "react";
import sachindra from "../image/sachindra.png"
export const Project = () => {
  return (
    <div id="projects" className="projects py-3">
      <div className="title">
        <span>Projects</span>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md mb-3">
            <img src={sachindra} alt="portfolio project" width="100%" />
          </div>
          <div className="col-md">
            <h2>My Portfoli site</h2>
            <div>
              <a href="#">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <p className="mt-3 fw-bold">
              Tech Used: HTML, CSS, JavaScript, React
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              cum rem blanditiis voluptates sit quae veritatis enim eum, ullam
              incidunt nemo deserunt tempore esse nostrum quibusdam quidem
              nesciunt rerum vel.
            </p>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-md order-md-2 mb-3">
            <img src={sachindra} alt="portfolio project" width="100%" />
          </div>
          <div className="col-md">
            <h2>My Portfoli site</h2>
            <div>
              <a href="#">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <p className="mt-3 fw-bold">
              Tech Used: HTML, CSS, JavaScript, React
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              cum rem blanditiis voluptates sit quae veritatis enim eum, ullam
              incidunt nemo deserunt tempore esse nostrum quibusdam quidem
              nesciunt rerum vel.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <img src={sachindra} alt="portfolio project" width="100%" />
          </div>
          <div className="col-md">
            <h2>My Portfoli site</h2>
            <div>
              <a href="#">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <p className="mt-3 fw-bold">
              Tech Used: HTML, CSS, JavaScript, React
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              cum rem blanditiis voluptates sit quae veritatis enim eum, ullam
              incidunt nemo deserunt tempore esse nostrum quibusdam quidem
              nesciunt rerum vel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
