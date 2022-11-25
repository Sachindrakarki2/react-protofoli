import React, { useEffect, useState } from "react";
import Sachindra from "../image/sac.png";
import { LayOut } from "./LayOut";
import { motion } from "framer-motion";
export const Hiro = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front-end Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <LayOut>
      <section className="hero mt-5  py-5">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-5 text-center order-md-2">
              <img src={Sachindra} alt="my image" width="90%" />
            </div>

        
         
            
            <div className="col-md-7 mt-5 pt-5">
            <div className="cont">Welcome to my Protfolio</div>
              hi 👋 i'm
              <span className="fw-bold"> Sachindra Karki</span>
              <div className="mt-2 mb-5 fs-3 fw-bold">{text}</div>
              <motion.p
                animate={{ x: -10 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                I love codiong and solving problems with code. sdsadsadsad
                Databased asd asdsad sachindralogosad s a
              </motion.p>
              <motion.button
                animate={{ rotate: 360 }}
                className="btn btn-danger"
              >
                Download Resume <i className="fa-solid fa-download"></i>
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
};
