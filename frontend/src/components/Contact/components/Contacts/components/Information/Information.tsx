import React, { useEffect, useState } from "react";

import {
  ButtonBar,
  ContactButtons,
} from "../../../../../../framework/Prebuilt";
import { FormGenerator, IconTextItem } from "../../../../../../framework/Base";
import { Flexer, Surface } from "../../../../../../framework/Containers";
import { ContactInformationData } from "../../../../Contact";
import { palettes } from "../../../../../../utils/theming/theme";

interface InformationProps {
  contactData: ContactInformationData;
  editMode: boolean;
}

const Information: React.FC<InformationProps> = ({ contactData, editMode }) => {
  const [data, setData] = useState<ContactInformationData>(contactData);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setData(contactData);
  }, [contactData]);

  const updateContactData = (updateContactData: ContactInformationData) => {
    setData(updateContactData);
    setEditing(false);
  };

  return (
    <Flexer j="c">
      {!editing ? (
        <div className="fade-in">
          <Surface
            boxShadow={0}
            a="c"
            j="c"
            px={3}
            py={2}
            br={1}
            mt={2}
            mb={0}
            maxWidth={300}
          >
            <IconTextItem
              icon="email"
              text={data.email}
              subtext="Email"
              divider
            />
            <IconTextItem
              icon="phone"
              text={data.phone}
              subtext="Phone"
              iconColor={palettes.secondary.main}
              divider
            />
            <IconTextItem
              icon="location_on"
              text={data.address}
              subtext="Address"
              divider
            />
            <ContactButtons
              contactData={data}
              size="sm"
              mt={12}
              mb={6}
              borderRadius={16}
            />
            {editMode && (
              <ButtonBar
                justifyContent="flex-end"
                editClick={() => setEditing(!editing)}
                adminLink="contactinformation"
                text="Contact Information"
                tooltipPosition="bottom"
                mt={8}
              />
            )}
          </Surface>
        </div>
      ) : (
        <FormGenerator
          title="Edit Contact Information"
          endpoint="contactinformation/1/"
          data={data}
          onUpdate={updateContactData}
          handleCancel={() => setEditing(!editing)}
          width={300}
          excludeKeys={[
            "id",
            "facebook",
            "linkedin",
            "instagram",
            "twitter",
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
            "set_name",
          ]}
          multilineKeys={["address"]}
          px={2}
          py={2}
          fade
          placement="bottom"
          boxShadow
        />
      )}
    </Flexer>
  );
};

export default Information;
