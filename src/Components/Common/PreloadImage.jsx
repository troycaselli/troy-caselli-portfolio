import { useState, useEffect } from "react";

const PreloadImage = (props) => {
  const { placeholderSrc, src, alt, className } = props;
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [imgClass, setImgClass] = useState(className + " blur");

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgClass(className);
      setImgSrc(src);
    };
  }, [className, src]);

  return <img src={imgSrc} alt={alt || ""} className={imgClass} />;
};
export default PreloadImage;
