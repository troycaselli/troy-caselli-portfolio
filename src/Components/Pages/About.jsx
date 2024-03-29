import React from "react";

import images from "../../images/about";
import bloomtechImg from "../../images/logos/bloomtech-logo.webp";
import "../../styling/about.css";

function About() {
  return (
    <section className="about-wrapper">
      <div className="featured-wrapper">
        <div className="featured-image-wrapper">
          <div className="featured-portrait-container">
            <img
              srcSet={`${images.portraitSm} 480w, ${images.portraitMd} 800w`}
              sizes="(max-width: 480px) 480px, 800px"
              src={images.portraitMd}
              alt="portrait of Troy Caselli wearing a suit and tie in front of a stone building"
              className="featured-portrait__image"
            />
          </div>
        </div>
        <div className="featured-certification-wrapper">
          <div className="featured-certification-container">
            <a
              href="https://www.credly.com/badges/ca1eb39e-acfe-432d-9199-0ce5ed2340f3/public_url"
              target="_blank"
              rel="noopener noreferrer"
              type="button"
            >
              <img
                src={bloomtechImg}
                alt="Bloom Institute of Technology orange and white logo"
                className="featured-certification__image"
              />
            </a>
          </div>
        </div>
        <div className="featured-text-container">
          <div className="featured-text-titles">
            <h3 className="featured-text__title">Follower of Christ.</h3>
            <h3 className="featured-text__title">Husband and Father.</h3>
            <h3 className="featured-text__title">Web Developer.</h3>
          </div>
          <div className="featured-text-paragraphs">
            <p className="featured-text__paragraph featured-text__drop-cap">
              The majority of my childhood was marked by the unique privilege of
              being a military kid. This kind of upbringing was extremely
              formative in my understanding of the world and my place in it; I
              observed, experienced, and enjoyed numerous cultures of the world,
              became practiced in accepting change and adapting to my
              surroundings, and learned to differentiate between the things that
              are transient from those that are most important. As I approached
              adulthood, my family moved to the place I call home, Spokane,
              Washington. It is here that I resolved to pursue ministry due to
              my growing love for Christ and the church. Consequently, I earned
              a bachelor’s degree from Moody Bible Institute, and I am currently
              pursuing an M.Div. from The Southern Baptist Theological Seminary.
            </p>
            <p className="featured-text__paragraph">
              Alongside this pursuit, I also cultivated a strong desire to be
              active and trained in another career field. For the next two and a
              half years, I worked for a small construction company and
              succeeded in my daily toil. Little did I know, however, that this
              work would result in a significant back injury. With a career
              pivot on the horizon, I was determined to enter a field that I had
              a passion for and could excel in, a field that I could use to
              serve my community and the world. After much deliberation, I chose
              to enter into the tech field as a Full-Stack Web Developer. As a
              result, I spent the next year self-learning programming and
              earning a Full-Stack certification through Bloom Institute of
              Technology. Currently, I am glad to be using my programming skills
              as a contract Full-Stack Developer for ikTech, a company native to
              Spokane with a distinct focus on software development for
              nonprofit organizations.
            </p>
            <p className="featured-text__paragraph">
              Lastly, I am married to Teri Jo, my beloved bride of three years,
              and we have been astoundingly blessed with our son, Tobias. I
              thoroughly enjoy spending time together and with our families,
              serving the church, hiking and being outdoors, thinking deeply,
              and building my ancient and modern currency collection.
            </p>
          </div>
        </div>
      </div>

      <h2 className="slideshow-header">Photo Gallery</h2>
      <div id="slideshow">
        <input
          type="radio"
          name="slideshow"
          className="slideshow__button"
          id="s1"
          defaultChecked
        />
        <input
          type="radio"
          name="slideshow"
          className="slideshow__button"
          id="s2"
        />
        <input
          type="radio"
          name="slideshow"
          className="slideshow__button"
          id="s3"
        />
        <input
          type="radio"
          name="slideshow"
          className="slideshow__button"
          id="s4"
        />
        <input
          type="radio"
          name="slideshow"
          className="slideshow__button"
          id="s5"
        />
        <input
          type="radio"
          name="slideshow"
          className="slideshow__button"
          id="s6"
        />
        <input
          type="radio"
          name="slideshow"
          className="slideshow__button"
          id="s7"
        />
        <label htmlFor="s1" id="slide1" className="slideshow__label">
          <div className="slideshow__image-container">
            <img
              srcSet={`${images.maternitySm} 480w, ${images.maternityMd} 800w, ${images.maternityLg} 1280w`}
              sizes="(max-width: 480px) 480px, (max-width: 800px) 800px, 1280px"
              src={images.maternityMd}
              alt="Troy and Teri Jo celebrating maternity"
              className="slideshow__image"
            />
          </div>
        </label>
        <label htmlFor="s2" id="slide2" className="slideshow__label">
          <div className="slideshow__image-container">
            <img
              srcSet={`${images.graduationSm} 480w, ${images.graduationMd} 800w, ${images.graduationLg} 1280w`}
              sizes="(max-width: 480px) 480px, (max-width: 800px) 800px, 1280px"
              src={images.graduationMd}
              alt="BloomTech graduation party with family"
              className="slideshow__image"
            />
          </div>
        </label>
        <label htmlFor="s3" id="slide3" className="slideshow__label">
          <div className="slideshow__image-container">
            <img
              srcSet={`${images.playingSm} 480w, ${images.playingMd} 800w, ${images.playingLg} 1280w`}
              sizes="(max-width: 480px) 480px, (max-width: 800px) 800px, 1280px"
              src={images.playingMd}
              alt="playing with baby Tobias while coding on the floor"
              className="slideshow__image"
            />
          </div>
        </label>
        <label htmlFor="s4" id="slide4" className="slideshow__label">
          <div className="slideshow__image-container">
            <img
              srcSet={`${images.cherriesSm} 480w, ${images.cherriesMd} 800w, ${images.cherriesLg} 1280w`}
              sizes="(max-width: 480px) 480px, (max-width: 800px) 800px, 1280px"
              src={images.cherriesMd}
              alt="climbing in and picking cherries at Green Bluff"
              className="slideshow__image"
            />
          </div>
        </label>
        <label htmlFor="s5" id="slide5" className="slideshow__label">
          <div className="slideshow__image-container">
            <img
              srcSet={`${images.mazeSm} 480w, ${images.mazeMd} 800w, ${images.mazeLg} 1280w`}
              sizes="(max-width: 480px) 480px, (max-width: 800px) 800px, 1280px"
              src={images.mazeMd}
              alt="wandering through a corn maze"
              className="slideshow__image"
            />
          </div>
        </label>
        <label htmlFor="s6" id="slide6" className="slideshow__label">
          <div className="slideshow__image-container">
            <img
              srcSet={`${images.glacierSm} 480w, ${images.glacierMd} 800w, ${images.glacierLg} 1280w`}
              sizes="(max-width: 480px) 480px, (max-width: 800px) 800px, 1280px"
              src={images.glacierMd}
              alt="family gathered before a waterfall at Glacier National Park"
              className="slideshow__image"
            />
          </div>
        </label>
        <label htmlFor="s7" id="slide7" className="slideshow__label">
          <div className="slideshow__image-container">
            <img
              srcSet={`${images.studyingSm} 480w, ${images.studyingMd} 800w, ${images.studyingLg} 1280w`}
              sizes="(max-width: 480px) 480px, (max-width: 800px) 800px, 1280px"
              src={images.studyingMd}
              alt="coding at a desk while holding a sleeping Tobias"
              className="slideshow__image"
            />
          </div>
        </label>
      </div>
    </section>
  );
}

export default About;
