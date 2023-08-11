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
        <iframe
          className="featured-landing-video"
          src="https://www.youtube.com/embed/2eXqBfBBgFc?fs=0&rel=0&autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        // <iframe
        //   className="featured-landing-video"
        //   src="https://www.youtube.com/watch?v=2eXqBfBBgFc"
        //   title="Asylum Project Contribution"
        //   frameborder="0"
        //   webkitallowfullscreen
        //   mozallowfullscreen
        //   allowfullscreen
        // ></iframe>
      )}
    </section>
  );
}

export default Featured;
