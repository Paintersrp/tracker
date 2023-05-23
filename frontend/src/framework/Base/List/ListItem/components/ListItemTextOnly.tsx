import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Flexer } from "../../../../Containers";
import Text from "../../../Text/Text";

interface ListItemTextOnlyProps {
  text?: string;
  subtext?: string;
  textAlign?: "left" | "right" | "center";
  to?: string;
}

const ListItemTextOnly: FC<ListItemTextOnlyProps> = ({
  text,
  subtext,
  textAlign = "left",
  to,
}) => {
  return (
    <React.Fragment>
      {to ? (
        <Link to={to}>
          <Flexer
            fd="column"
            style={{
              marginRight: textAlign === "right" ? 16 : 0,
              marginLeft: textAlign !== "right" ? 16 : 0,
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
        </Link>
      ) : (
        <Flexer
          fd="column"
          style={{
            marginRight: textAlign === "right" ? 16 : 0,
            marginLeft: textAlign !== "right" ? 16 : 0,
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
      )}
    </React.Fragment>
  );
};

export default ListItemTextOnly;
