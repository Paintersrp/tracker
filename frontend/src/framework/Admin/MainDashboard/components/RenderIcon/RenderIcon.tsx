import React from "react";

import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../../../Components";

interface RenderIconProps {
  appName: string;
  className: string;
}

export function RenderIcon({
  appName,
  className,
}: RenderIconProps): React.ReactElement | null {
  switch (appName) {
    case "authorization":
      return (
        <Icon
          className={className}
          icon={faGhost}
          size="1.5rem"
          color="#f5f5f5"
        />
      );
    case "posts":
      return (
        <Icon
          className={className}
          icon={faGhost}
          size="1.5rem"
          color="#f5f5f5"
        />
      );
    case "InfoIcon":
      return (
        <Icon
          className={className}
          icon={faGhost}
          size="1.5rem"
          color="#f5f5f5"
        />
      );
    case "about":
      return (
        <Icon
          className={className}
          icon={faGhost}
          size="1.5rem"
          color="#f5f5f5"
        />
      );
    case "support":
      return (
        <Icon
          className={className}
          icon={faGhost}
          size="1.5rem"
          color="#f5f5f5"
        />
      );
    case "jobs":
      return (
        <Icon
          className={className}
          color="#f5f5f5"
          icon={faGhost}
          size="1.5rem"
        />
      );
    case "tables":
      return (
        <Icon
          className={className}
          icon={faGhost}
          size="1.5rem"
          color="#f5f5f5"
        />
      );
    case "contact":
      return (
        <Icon
          className={className}
          icon={faGhost}
          size="1.5rem"
          color="#f5f5f5"
        />
      );
    case "faqs":
      return (
        <Icon
          className={className}
          icon={faGhost}
          size="1.5rem"
          color="#f5f5f5"
        />
      );
    case "tasks":
      return (
        <Icon
          className={className}
          icon={faGhost}
          size="1.5rem"
          color="#f5f5f5"
        />
      );
    default:
      return (
        <Icon
          className={className}
          icon={faGhost}
          size="1.5rem"
          color="#f5f5f5"
        />
      );
  }
}
