import React from "react";
import { shadowSwitch } from "../../../utils/theming/styleSwitches";
import "./Media.css";

interface MediaProps {
  src: string;
  altText: string;
  caption?: string;
  className?: string;
  mediaClass?: string;
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  manualSize?: boolean;
  boxShadow?: number;
}

const Media: React.FC<MediaProps> = ({
  src,
  altText,
  caption,
  className,
  mediaClass,
  style,
  imageStyle,
  boxShadow = 0,
}) => {
  return (
    <div className={`media  ${className}`} style={style}>
      <img
        className={`media-image  ${mediaClass}`}
        src={src}
        alt={altText}
        style={{ ...imageStyle, boxShadow: shadowSwitch(boxShadow) }}
      />
      {caption && <div className="media-caption">{caption}</div>}
    </div>
  );
};

export default Media;
