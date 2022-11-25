import React from "react";
import { LayOut } from "./LayOut";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <LayOut>
      <div id="contact" className="container contact rounded-5 p-3 ">
        <div className="title">
          <span>Contact Me</span>
        </div>

        {/* <!-- icons to links --> */}
        <div className="row mb-5">
          <div className="col fa-3x d-flex justify-content-between px-5">
            {/* <!-- <a href="tel:041234567"><i className="fa-solid fa-mobile"></i></a> --> */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:sachindrakarki2@gmail.com"
            >
              <i className="fa-solid fa-envelope "></i>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/sachindra-karki-626074250/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.facebook.com/sachin.karki.52/"
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.youtube.com/@gamergaming6071"
              target="_blank"
            >
              <i className="fa-brands fa-youtube text-danger"></i>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="tel:0416461327"
              target="_blank"
            >
              <i class="fa-solid fa-mobile"></i>
            </motion.a>
          </div>
        </div>
      </div>
    </LayOut>
  );
};
