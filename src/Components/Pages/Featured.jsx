import "../../styling/featured.css";

function Featured() {
  return (
    <section className="featured-landing-wrapper">
      <iframe
        className="featured-landing-video"
        src="//www.youtube.com/embed/2eXqBfBBgFc?fs=0&rel=0&mute=1"
        title="Asylum Contribution Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        webkitallowfullscreen
        mozallowfullscreen
      ></iframe>
    </section>
  );
}

export default Featured;
