import { useState, useEffect } from "react";

const IncrementedImage = ({ placeholderSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [imgClass, setImgClass] = useState("slideshow__image__blur");

  console.log(imgSrc);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    setImgClass("slideshow__image");
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <img
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      className={imgClass}
    />
  );
};
export default IncrementedImage;
