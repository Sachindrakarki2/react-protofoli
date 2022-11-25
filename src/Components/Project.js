import React from "react";
import movieapi from "../image/movieapi.png";
import nottodo from "../image/not.png";
import calculator from "../image/prankCalculator.png";
import { LayOut } from "./LayOut";
export const Project = () => {
  return (
    <LayOut>
      <div id="projects" className="projects py-3 mt-4 ">
        <div className="title">
          <span>Projects</span>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md mb-3">
              <img src={calculator} alt="portfolio project" width="100%" />
            </div>
            <div className="col-md">
              <h2>React Prank Calculator</h2>
              <div className="gitlogo">
                <a
                  href="https://github.com/Sachindrakarki2/React-prank-calculator"
                  target="_blank"
                >
                  <i className="fa-brands fa-square-github text-black"></i>
                </a>
                <a
                  href="https://react-prank-calculator-six.vercel.app/"
                  target="_blank"
                >
                  <i className="fa-brands fa-chrome text-warning"></i>
                </a>
              </div>
              <p className="mt-3 fw-bold">
                Tech Used: HTML, CSS, JavaScript, React,React-bootstrap
              </p>

              <p>
                This is a simple calculator project that does mathematical
                operation. I have added prank feature to it as it will do prank
                by giving wrong answer and making weird sound. I have used CSS
                for styling purpose. Things I learned on this project
                1.Components of react JS 2. States : React JS updates UI based
                on the application states 3. Props : Medium of communication
                between the components
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-md order-md-2 mb-3">
              <img src={nottodo} alt="portfolio project" width="100%" />
            </div>
            <div className="col-md">
              <h2>React NOT_TO_DO list</h2>
              <div className="gitlogo">
                <a
                  href="https://github.com/Sachindrakarki2/Not-to-do-list-react/tree/main"
                  target="_blank"
                >
                  <i className="fa-brands fa-square-github text-black"></i>
                </a>
                <a
                  href="https://not-to-do-list-react-three.vercel.app/"
                  target="_blank"
                >
                  <i className="fa-brands fa-chrome text-warning"></i>
                </a>
              </div>
              <p className="mt-3 fw-bold">
                Tech Used: HTML, CSS, JavaScript, React
              </p>

              <p>
                The functionality of the Application. The users can input the
                to-do task in the input field and press enter. The task and
                estimated hours to complete the task are then displayed in the
                to-do task field. The user then can move the tasks to the done
                task field once it is complete. Finally, the user can delete
                multiple tasks from either list. Things I learned working on
                this project. 1. React Components 2. State and Props
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <img src={movieapi} alt="portfolio project" width="100%" />
            </div>
            <div className="col-md">
              <h2>React Movie Api</h2>
              <div className="gitlogo">
                <a
                  href="https://github.com/Sachindrakarki2/react-api-Movie"
                  target="_blank"
                >
                  <i className="fa-brands fa-square-github text-black"></i>
                </a>
                <a href="https://react-api-movie.vercel.app/" target="_blank">
                  <i className="fa-brands fa-chrome text-warning"></i>
                </a>
              </div>
              <p className="mt-3 fw-bold">
                Tech Used: HTML, CSS, JavaScript, React
              </p>

              <p>
                Search Movie App Using React. I have created a search movie app
                using Open Movie Database(OMDb) API. This app suggests user a
                random movie every-time it starts or reloads the application. It
                also helps users to search the movie of their choice and add it
                to "happy" category or "Lazy" category and make their own movie
                playlists. In this project, I learned, 1. Fetch API 2. UseEffect
                hooks 3. Effective use of more react components, props, hooks
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayOut>
  );
};
