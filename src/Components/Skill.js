import React from 'react'

export const Skill = () => {
  return (
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
                <i className="fa-brands fa-figma"></i>Figma
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
