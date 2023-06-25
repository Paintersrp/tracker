import React, { useState } from 'react';

import { IconButton } from '../Buttons';
import { Flexer } from '../Containers';
import { Page } from '../Layout';
import { Button } from '../Buttons/Button/Button';
import { PalettePreview } from './PalettePreview';
import { Link } from '../Elements/Link/Link';
import { Base } from '@/theme/base';
import Tooltip2 from '../Elements/Popover/Tooltip2';
import { Radio, RadioGroup } from '../Form';
import { useAlertStore } from '@/stores/alert';

interface WIPProps {}

const WIP: React.FC<WIPProps> = ({}) => {
  const [checked, setChecked] = useState(false);
  const { showAlert } = useAlertStore();

  const handleShowAlert = () => {
    showAlert('success', `Test`, 3000);
  };

  return (
    <Page>
      <Flexer j="c">
        <Base mt={96} w="auto">
          <Button onClick={handleShowAlert}>Alert</Button>
          <RadioGroup value={checked} onChange={(value: any) => setChecked(value)}>
            <Radio value="test1" label="Test1" />
            <Radio value="test2" label="Test2" />
          </RadioGroup>
          <Tooltip2 text="yeet" position="bottom">
            <span>Test</span>
          </Tooltip2>
        </Base>{' '}
      </Flexer>
      <PalettePreview />
      <div>
        <Link to="/taco" mt={96} pt={96}>
          Test
        </Link>
      </div>
      <Flexer wrap a="c" j="c" mt={24} gap={12}>
        <IconButton variant="hover" icon="check" />
        <IconButton variant="hover" palette="secondary" icon="check" />
        <IconButton variant="hover" palette="tertiary" icon="check" />
        <IconButton variant="hover" palette="quaternary" icon="check" />
        <IconButton variant="hover" palette="error" icon="check" />
        <IconButton variant="hover" palette="warning" icon="check" />
        <IconButton variant="hover" palette="success" icon="check" />
        <IconButton variant="hover" palette="info" icon="check" />
        <IconButton variant="hover" palette="dark" icon="check" />
        <IconButton variant="hover" palette="slate" icon="check" />
        <IconButton variant="hover" palette="smoke" icon="check" />
      </Flexer>
      <Flexer wrap a="c" j="c" mt={24} gap={12}>
        <IconButton variant="standard" icon="check" />
        <IconButton variant="standard" palette="secondary" icon="check" />
        <IconButton variant="standard" palette="tertiary" icon="check" />
        <IconButton variant="standard" palette="quaternary" icon="check" />
        <IconButton variant="standard" palette="error" icon="check" />
        <IconButton variant="standard" palette="warning" icon="check" />
        <IconButton variant="standard" palette="success" icon="check" />
        <IconButton variant="standard" palette="info" icon="check" />
        <IconButton variant="standard" palette="dark" icon="check" />
        <IconButton variant="standard" palette="slate" icon="check" />
        <IconButton variant="standard" palette="smoke" icon="check" />
      </Flexer>

      <Flexer wrap a="c" j="c" mt={24} gap={12}>
        <Button>Test</Button>
        <Button palette="secondary">Test</Button>
        <Button palette="tertiary">Test</Button>
        <Button palette="quaternary">Test</Button>
        <Button palette="error">Test</Button>
        <Button palette="warning">Test</Button>
        <Button palette="success">Test</Button>
        <Button palette="info">Test</Button>
        <Button palette="dark">Test</Button>
        <Button palette="slate">Test</Button>
        <Button palette="smoke">Test</Button>
      </Flexer>
      <Flexer wrap a="c" j="c" mt={24} gap={12}>
        <Button variant="outlined">Test</Button>
        <Button variant="outlined" palette="secondary">
          Test
        </Button>
        <Button variant="outlined" palette="tertiary">
          Test
        </Button>
        <Button variant="outlined" palette="quaternary">
          Test
        </Button>
        <Button variant="outlined" palette="error">
          Test
        </Button>
        <Button variant="outlined" palette="warning">
          Test
        </Button>
        <Button variant="outlined" palette="success">
          Test
        </Button>
        <Button variant="outlined" palette="info">
          Test
        </Button>
        <Button variant="outlined" palette="dark">
          Test
        </Button>
        <Button variant="outlined" palette="slate">
          Test
        </Button>
        <Button variant="outlined" palette="smoke">
          Test
        </Button>
      </Flexer>
    </Page>
  );
};

export default WIP;
