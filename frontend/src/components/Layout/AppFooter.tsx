import { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './css/AppFooter.css';

import { Button, IconButton } from '@/components/Buttons';
import { Flexer } from '@/components/Containers';
import { Divider, Text, Tooltip } from '@/components/Elements';
import { Input } from '@/components/Form';
import { Icon } from '@/components/Media';
import { SiteLinkType } from '@/providers/LayoutProvider';
import { colors } from '@/theme/common';
import { LOGO, SOCIALS, TITLE } from '@/settings';
import { handleDataChange } from '@/utils';

type SubscribeDTO = {
  email: string;
};

type AppFooterProps = {
  links: SiteLinkType[];
};

export const AppFooter: FC<AppFooterProps> = ({ links }) => {
  const [state, setState] = useState('initial');
  const [data, setData] = useState<SubscribeDTO>({ email: '' });

  return (
    <footer className="footer-root">
      <div className="footer-container">
        <Flexer mb={0} j="c">
          <Tooltip text="View Home Page" position="right">
            <Link to="/" className="footer-link" style={{ display: 'flex' }}>
              {LOGO}
              <Text c="light" t="h4" className="footer-app-title">
                {TITLE}
              </Text>
            </Link>
          </Tooltip>
        </Flexer>
        <Flexer key="item-container">
          <Flexer className="footer-item" key="sub-form">
            <Flexer j="c" a="c" fd="column">
              <Text t="h6" a="l" style={{ width: '90%' }}>
                Email Address
              </Text>
              <Input
                id="emailaddress"
                type="text"
                value={data.email}
                onChange={(e) => handleDataChange(e, setData, data)}
                name="email"
                style={{
                  width: '90%',
                  color: '#fff',
                  background: '#fff',
                  height: 30,
                }}
              />
              <Flexer j="c">
                {/* Add Icons / State Checkmark */}
                <Button
                  disabled={state === 'success'}
                  color="secondary"
                  size="md"
                  mt={16}
                  w={105}
                  style={{ fontSize: '1rem' }}
                  onClick={() => setState(state === 'success' ? 'initial' : 'success')}
                >
                  {state === 'success' && (
                    <Icon icon={faCheck} color="#f5f5f5" mr={4} ml={0} size="1.2rem" />
                  )}
                  {state === 'success' ? 'Subscribed' : 'Subscribe'}
                </Button>
              </Flexer>
            </Flexer>
          </Flexer>
          <Flexer className="footer-item" key="footer-links">
            <Flexer fd="column" j="c" a="c">
              {links.map((link) => {
                if (!link.footer) {
                  return null;
                }
                return (
                  <Tooltip
                    key={`${link.key}-footer-link`}
                    text={`View ${link.key} Page`}
                    position="right"
                  >
                    <Link key={link.key} to={link.to} className="footer-link">
                      <Text t="body1" className="footer-link-text">
                        {link.key}
                      </Text>
                    </Link>
                  </Tooltip>
                );
              })}
            </Flexer>
          </Flexer>
          <Flexer className="footer-item" fd="column">
            <Text t="h5" a="c" style={{ marginBottom: 2 }}>
              Connect with Us
            </Text>
            <Flexer j="c" a="c" wrap>
              {SOCIALS.map((platform) => {
                if (platform.handle) {
                  return (
                    <span key={`${platform.name}-footer-social`} style={{ marginRight: 4 }}>
                      <Tooltip text={platform.handle} position="bottom">
                        <IconButton
                          size="md"
                          fontSize="1.5rem"
                          icon={platform.icon}
                          invertColors
                          manualHoverColor={colors.secondary.light}
                        />
                      </Tooltip>
                    </span>
                  );
                } else {
                  return null;
                }
              })}
            </Flexer>
          </Flexer>
        </Flexer>
        <Divider color="#a6a6a6" />
        <Text t="subtitle2" a="c" style={{ marginTop: 6 }}>
          © 2023 {TITLE}. All rights reserved.
        </Text>
      </div>
    </footer>
  );
};
