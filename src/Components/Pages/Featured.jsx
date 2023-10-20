import "../../styling/featured.css";

function Featured() {
  return (
    <section className="featured-landing-wrapper">
      {/* full background: car dummy, cathedral construction, blueprint 
      uppr half: title-hugging center line
      bottom half: (partial opacity) and description-hugging center line
      onHover: enlarge
      */}
      <a
        className="featured-card__link featured-mockups"
        href="https://youtu.be/gZHYCkHwMmk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="featured-title">Cypress Testing Google's Homepage</h3>
        <div className="featured-container">
          <p className="featured-info">
            I recorded a video displaying a number of automated Cypress tests
            which tested critical functionalities on Google's Homepage. Tests
            included the functionality of the search bar and various links on
            the page.
          </p>
        </div>
      </a>
      <a
        className="featured-card__link featured-mockups"
        href="https://www.figma.com/file/jLguxvEulAIG6btFx5BIfu/ES-Reports?type=design&node-id=0-1&mode=design"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="featured-title">ES Reports Mockups</h3>
        <div className="featured-container">
          <p className="featured-info">
            Appointed as the Front-End Lead for the Emergency Shelters Reports
            Hub project, I designed the UI and user flow mockups for desktop and
            mobile devices using Figma.
          </p>
        </div>
      </a>
      <a
        className="featured-card__link featured-mockups"
        href="https://youtu.be/2eXqBfBBgFc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="featured-title">Ticket Solution Video Documentation</h3>
        <div className="featured-container">
          <p className="featured-info">
            I was given the task of integrating the Auth0, third-party
            microservice into the Asylum Project with the goal of protecting
            certain routes (such as profile pages) from being accessible to the
            general public.
          </p>
        </div>
      </a>
      {/* <iframe
        className="featured-landing-video"
        src="//www.youtube.com/embed/2eXqBfBBgFc?fs=0&rel=0&autoplay=1&mute=1"
        title="Asylum Contribution Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe> */}
    </section>
  );
}

export default Featured;
