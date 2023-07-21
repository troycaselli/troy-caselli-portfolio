import { useState, useEffect } from "react";

const IncrementedImage = (props) => {
  const { placeholderSrc, src, alt, className } = props;
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [imgClass, setImgClass] = useState(className + " blur");

  console.log(imgClass);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      //   setTimeout(() => {
      setImgClass(className);
      setImgSrc(src);
      //   }, 2000);
    };
  }, [src]);

  return <img src={imgSrc} alt={alt || ""} className={imgClass} />;
};
export default IncrementedImage;
