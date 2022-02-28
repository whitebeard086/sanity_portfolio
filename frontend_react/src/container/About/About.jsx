import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";


const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then(data => setAbout(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Design</span>
        <br /> means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {about.map((item, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={item.title + index}>
            <img src={urlFor(item.imgUrl)} alt={item.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {item.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"), 
  "about",
  "app__whitebg"
);
