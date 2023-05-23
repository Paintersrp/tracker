import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { Flexer } from "../../../../Containers";
import Icon from "../../../Icon/Icon";
import Text from "../../../Text/Text";

interface ListItemWithIconProps {
  text?: string;
  subtext?: string;
  icon: IconDefinition;
  iconColor?: string;
  textAlign?: "left" | "right" | "center";
  to?: string;
}

const ListItemWithIcon: FC<ListItemWithIconProps> = ({
  text,
  subtext,
  icon,
  iconColor = "primary",
  textAlign = "left",
  to,
}) => {
  return (
    <React.Fragment>
      {to ? (
        <Link to={to} style={{ width: "100%" }}>
          <Flexer j="sb">
            <Icon
              size="1.25rem"
              color={iconColor || "primary"}
              icon={icon}
              style={{
                order: textAlign === "right" || textAlign === "center" ? 0 : 2,
              }}
              mr={textAlign !== "right" ? 16 : 0}
              ml={textAlign === "right" ? 16 : textAlign === "center" ? 24 : 0}
            />
            <Flexer
              fd="column"
              style={{
                order: textAlign === "right" ? 1 : 0,
                marginRight:
                  textAlign === "right" ? 16 : textAlign === "center" ? 62 : 0,
                marginLeft: textAlign === "left" ? 16 : 0,
              }}
            >
              <Text t="h5" a={textAlign}>
                {text}
              </Text>
              {subtext && (
                <Text mt={0} a={textAlign}>
                  {subtext}
                </Text>
              )}
            </Flexer>
          </Flexer>
        </Link>
      ) : (
        <Flexer j="sb">
          <Icon
            size="1.25rem"
            color={iconColor || "primary"}
            icon={icon}
            style={{
              order: textAlign === "right" || textAlign === "center" ? 0 : 2,
            }}
            mr={textAlign !== "right" ? 16 : 0}
            ml={textAlign === "right" ? 16 : textAlign === "center" ? 24 : 0}
          />
          <Flexer
            fd="column"
            style={{
              order: textAlign === "right" ? 1 : 0,
              marginRight:
                textAlign === "right" ? 16 : textAlign === "center" ? 62 : 0,
              marginLeft: textAlign === "left" ? 16 : 0,
            }}
          >
            <Text t="h5" a={textAlign}>
              {text}
            </Text>
            {subtext && (
              <Text mt={0} a={textAlign}>
                {subtext}
              </Text>
            )}
          </Flexer>
        </Flexer>
      )}
    </React.Fragment>
  );
};

export default ListItemWithIcon;
