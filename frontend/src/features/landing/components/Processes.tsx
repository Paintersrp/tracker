import { FC } from 'react';

import { SectionHeader, SectionHeaderContent } from '@/components/Built';
import { Container, Flexer, Item } from '@/components/Containers';

import { BaseProps } from '@/theme/base';

import { Process } from './Process';
import { ProcessContent } from '../types';
import { useEditModeStore } from '@/stores/editmode';

interface ProcessesProps extends BaseProps {
  headerData: SectionHeaderContent | any;
  processData: ProcessContent[];
}

export const Processes: FC<ProcessesProps> = ({ headerData, processData, ...rest }) => {
  const { editMode }: any = useEditModeStore();
  return (
    <Flexer j="c" a="c" mb={24} style={{ minWidth: 325 }} {...rest}>
      <Flexer fd="column" style={{ maxWidth: 1200, padding: 20 }}>
        <SectionHeader headerData={headerData} formTitle="Edit Processes Header" />
        <Container>
          {processData.map((process, index) => (
            <Item key={`process-${index}`} xs={12} sm={12} md={12} lg={4} xl={4} justify="center">
              <Process data={process} editMode={editMode} />
            </Item>
          ))}
        </Container>
      </Flexer>
    </Flexer>
  );
};
