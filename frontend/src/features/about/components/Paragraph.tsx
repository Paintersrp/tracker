import { FC, Fragment, useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

import { ButtonBar } from '@/components/Built';
import { Flexer } from '@/components/Containers';
import { BaseProps, Text } from '@/components/Elements';
import { useApp } from '@/hooks';

import { ParagraphEdit } from './ParagraphEdit';
import { ParagraphType } from '../types';
import './css/Paragraph.css';

interface ParagraphProps extends BaseProps {
  data: ParagraphType;
  adminLink?: string;
  text?: string;
}

export const Paragraph: FC<ParagraphProps> = ({ data, adminLink, text, ...rest }) => {
  const { editMode } = useApp();
  const [paragraphData, setParagraphData] = useState<ParagraphType>(data);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setParagraphData(data);
  }, [data]);

  const handleUpdate = (updateData: any) => {
    setParagraphData(updateData);
    setEdit(false);
  };

  return (
    <Flexer mt={32} mb={32} fd="column" {...rest}>
      {!edit ? (
        <Fragment>
          <Flexer j="sb" className="paragraph-section-title fade-in">
            <Text t="h3">{paragraphData.title}</Text>
            {!edit && editMode && (
              <ButtonBar
                editClick={() => setEdit(!edit)}
                adminLink={adminLink}
                tooltipPosition="top"
                text={text}
              />
            )}
          </Flexer>
          {paragraphData.body ? (
            <Text
              t="body1"
              className="fade-in paragraph-body"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(paragraphData.body),
              }}
            />
          ) : null}
        </Fragment>
      ) : (
        <div>
          <Flexer j="sb" className="paragraph-section-title fade-in">
            <Text t="h3">{paragraphData.title}</Text>
          </Flexer>
          <ParagraphEdit
            content={paragraphData}
            onUpdate={handleUpdate}
            type={adminLink}
            handleCancel={() => setEdit(!edit)}
          />
        </div>
      )}
    </Flexer>
  );
};