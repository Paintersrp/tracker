import React from "react";
import DOMPurify from "dompurify";
import "./Paragraph.css";

import { Text } from "../../../../framework/Base";
import ParagraphEdit from "./components/ParagraphEdit";
import { Flexer } from "../../../../framework/Containers";
import { ButtonBar } from "../../../../framework/Prebuilt";

interface ParagraphProps {
  data: any;
  editMode?: boolean;
  editState?: boolean;
  setEdit: (editState: boolean) => void;
  adminLink?: string;
  text?: string;
  onUpdate?: (update: any) => void;
}

const Paragraph: React.FC<ParagraphProps> = ({
  data,
  editMode,
  editState,
  setEdit,
  adminLink,
  text,
  onUpdate,
}) => {
  console.log("ediitMode", editMode);
  return (
    <Flexer mt={32} mb={32} fd="column">
      {!editState ? (
        <React.Fragment>
          <Flexer j="sb" className="paragraph-section-title fade-in">
            <Text t="h3">{data.title}</Text>

            {!editState && editMode && (
              <ButtonBar
                editClick={() => setEdit(!editState)}
                adminLink={adminLink}
                tooltipPosition="top"
                text={text}
              />
            )}
          </Flexer>

          {data.body ? (
            <Text
              t="body1"
              className="fade-in paragraph-body"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.body),
              }}
            />
          ) : null}
        </React.Fragment>
      ) : (
        <div>
          <Flexer j="sb" className="paragraph-section-title fade-in">
            <Text t="h3">{data.title}</Text>
          </Flexer>
          <ParagraphEdit
            content={data}
            onUpdate={onUpdate}
            type={adminLink}
            handleCancel={() => setEdit(!editState)}
          />
        </div>
      )}
    </Flexer>
  );
};

export default Paragraph;
