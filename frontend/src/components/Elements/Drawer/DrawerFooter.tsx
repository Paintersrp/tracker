import React from 'react';

import { Divider } from '../Divider/Divider';
import { BaseProps } from '@/theme/base';
import { Text } from '../Text/Text';
import { Flexer } from '@/components/Containers';

interface DrawerFooterProps extends BaseProps {
  title?: string;
}

export const DrawerFooter: React.FC<DrawerFooterProps> = ({ title, ...rest }) => {
  return (
    <Flexer fd="column" mb={12} {...rest}>
      <div style={{ width: '100%' }}>
        <Divider mb={2} color="drawerLight" />
      </div>
      <Text t="subtitle1" a="center">
        © 2023 {title}
        <br />
        All rights reserved.
      </Text>
    </Flexer>
  );
};
