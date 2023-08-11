import React, { useState } from "react";

import asylumThumbnail from "../../images/asylum-thumbnail.jpg";
import "../../styling/featured.css";

function Featured() {
  const [toggleThumbnail, setToggleTumbnail] = useState(false);

  const handleThumbnailToggle = () => {
    setToggleTumbnail(false);
  };

  return (
    <section className="featured-landing-wrapper">
      {toggleThumbnail ? (
        <img
          className="featured-landing-video"
          src={asylumThumbnail}
          alt="asylum report thumbnail"
          onClick={handleThumbnailToggle}
        ></img>
      ) : (
        // <iframe
        //   className="featured-landing-video"
        //   src="https://www.useloom.com/embed/eec004b30a404ae68c82b1609f889ef4?sid=5615448c-a2dd-464b-9c51-3bc917fb1aa"
        //   title="Asylum Project Contribution"
        //   frameborder="0"
        //   webkitallowfullscreen
        //   mozallowfullscreen
        //   allowfullscreen
        // ></iframe>

        <iframe
          className="featured-landing-video"
          src="https://www.youtube.com/embed/2eXqBfBBgFc?fs=0&rel=0&autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      )}
    </section>
  );
}

export default Featured;
