import React from "react";
import { LayOut } from "./LayOut";

export const Skill = () => {
  return (
    <LayOut>
      <section id="skills" className="container py-4">
        <div className="row">
          <div className="col">
            {/* <!-- title --> */}
            <div className="title">
              <span>Skills</span>
            </div>

            {/* <!-- icons --> */}
            <div className="icons">
              <div>
                <i className="fa-brands fa-html5 text-danger"></i> HTML
              </div>
              <div>
                <i className="fa-brands fa-css3-alt text-primary"></i> CSS
              </div>
              <div>
                <i className="fa-brands fa-square-js text-warning"></i>{" "}
                JavaScript
              </div>
              <div>
                <i className="fa-brands fa-react text-primary"></i> React
              </div>

              <div>
                <i className="fa-brands fa-figma"></i>Figma
              </div>
              <div>
                <i class="fa-brands fa-node text-success"></i>Node.js
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
};
