import React, { useEffect, useState } from "react";

import {
  Divider,
  FormGenerator,
  IconButton,
  Media,
  Text,
  Tooltip,
} from "../../../../../../framework/Base";
import { Flexer, Item, Surface } from "../../../../../../framework/Containers";
import { ButtonBar } from "../../../../../../framework/Prebuilt";
import { MemberData } from "../../../../Contact";
import { SOCIALS } from "../../../../../../config";

interface MemberProps {
  member: MemberData;
  editMode?: boolean;
}

const Member: React.FC<MemberProps> = ({ member, editMode = false }) => {
  const [editing, setEditing] = useState(false);
  const [memberData, setMemberData] = useState(member);

  useEffect(() => {
    setMemberData(member);
  }, [member]);

  const updateMember = (updateMember: typeof memberData) => {
    setMemberData(updateMember);
    setEditing(false);
  };

  return (
    <Item xs={12} sm={6} key={memberData.name}>
      {!editing ? (
        <Surface
          br={1}
          boxShadow={1}
          className="fade-in"
          style={{ maxWidth: 320 }}
          mt={0}
          px={2}
          py={2}
        >
          <Flexer j="fs" a="fs">
            <Media
              size="mini"
              src={memberData.image}
              boxShadow={0}
              altText="member-image"
            />
            <Flexer fd="column" w="auto">
              <Text t="h6" fw="bold" s="1.3rem" pl={8}>
                {memberData.name}
              </Text>
              <Text t="body1" fw="bold" s="0.9rem" pl={8}>
                {memberData.role}
              </Text>
            </Flexer>
          </Flexer>
          <Divider mt={16} mb={8} />
          <Flexer a="fs" fd="column">
            <Text t="body1" fw="bold" s="0.95rem" mb={4}>
              Biography
            </Text>
            <Text t="body1" s="0.9rem" fw={500}>
              {member.bio}
            </Text>
          </Flexer>
          <Flexer j="c" gap={4} mt={4}>
            {SOCIALS.map((platform) => {
              if (memberData[platform.name]) {
                return (
                  <Tooltip
                    text={`@${memberData[platform.name]}`}
                    position="bottom"
                    key={platform.name}
                  >
                    <IconButton
                      size="sm"
                      fontSize="1.35rem"
                      aria-label={platform.name}
                      className="info-button"
                      icon={platform.icon}
                      href={`https://www.${platform.name}.com/${
                        memberData[platform.name]
                      }`}
                    />
                  </Tooltip>
                );
              } else {
                return null;
              }
            })}
          </Flexer>
          {editMode && (
            <ButtonBar
              justifyContent="flex-end"
              editClick={() => setEditing(!editing)}
              text="Member"
              tooltipPosition="bottom"
              mt={8}
              obj={memberData.id}
            />
          )}
        </Surface>
      ) : (
        <FormGenerator
          boxShadow
          title="Edit Member"
          endpoint={`teammember/${memberData.id}/`}
          data={memberData}
          onUpdate={updateMember}
          handleCancel={() => setEditing(!editing)}
          width={320}
          excludeKeys={["id", "image"]}
          multilineKeys={["bio"]}
          px={3}
          py={2}
          fade
          placement="bottom"
          imageMixin
          soloImageSize="mini"
        />
      )}
    </Item>
  );
};

export default Member;
