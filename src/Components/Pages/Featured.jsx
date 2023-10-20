import { Link } from "react-router-dom";

import "../../styling/featured.css";

function Featured() {
  return (
    <section className="featured-landing-wrapper">
      {/* full background: car dummy, cathedral construction, blueprint 
      uppr half: title-hugging center line
      bottom half: (partial opacity) and description-hugging center line
      onHover: enlarge
      */}
      {/* <Link
        to="/faith-in-five"
        className="featured-card__link featured-mockups"
      >
        <h3 className="featured-title">Test</h3>
        <div className="featured-container">
          <p className="featured-info">
            dfgu hijoiug yft dr sxcyunfkw engdvuyfg isuewb flngirhe fewgewfdste
            gerg erg dsr ewgfewg e gdgew fewg gd
          </p>
        </div>
      </Link> */}
      <iframe
        className="featured-landing-video"
        src="//www.youtube.com/embed/2eXqBfBBgFc?fs=0&rel=0&autoplay=1&mute=1"
        title="Asylum Contribution Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </section>
  );
}

export default Featured;
