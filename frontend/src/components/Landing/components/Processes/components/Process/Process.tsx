import React, { useState } from "react";

import {
  BaseProps,
  ButtonBar,
  Flexer,
  FormGenerator,
  MaterialIcon,
  SlideOnScroll,
  Text,
} from "../../../../../../framework";
import { palettes } from "../../../../../../utils";
import { ProcessData } from "../../../../Landing";

interface ProcessProps extends BaseProps {
  data: ProcessData;
  editMode: boolean;
}

const Process: React.FC<ProcessProps> = ({ data, editMode, ...rest }) => {
  const [featureData, setFeatureData] = useState(data);
  const [editing, setEditing] = useState(false);

  const updateProcess = (updatedProcess: typeof featureData) => {
    setFeatureData(updatedProcess);
    setEditing(false);
  };

  return (
    <SlideOnScroll from="below">
      <Flexer fd="column" j="c" a="c" mt={12} {...rest}>
        {!editing ? (
          <>
            <MaterialIcon
              icon={featureData.icon}
              color={palettes.secondary.main}
              size="28px"
            />
            <Text t="h4" a="c" mt={8} s="1.5rem" fw={700}>
              {featureData.title}
            </Text>
            <Text t="body1" mt={4} a="c" s="0.95rem" fw={500}>
              {featureData.description}
            </Text>
            {!editing && editMode && (
              <ButtonBar
                justifyContent="flex-end"
                editClick={() => setEditing(!editing)}
                adminLink="process"
                text="Process"
                tooltipPosition="bottom"
                obj={featureData.id}
                mt={8}
              />
            )}
          </>
        ) : (
          <FormGenerator
            title="Edit Process Item"
            endpoint={`process/${featureData.id}/`}
            data={featureData}
            onUpdate={updateProcess}
            handleCancel={() => setEditing(!editing)}
            width={325}
            excludeKeys={["id", "icon"]}
            multilineKeys={["description"]}
            px={3}
            py={3}
            placement="bottom"
            iconMixin
            boxShadow
          />
        )}
      </Flexer>
    </SlideOnScroll>
  );
};

export default Process;
