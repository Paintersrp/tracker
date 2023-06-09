import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ScrollToTopFAB } from '@/components/Built';
import { Alert } from '@/components/Elements';
import { AppDrawer, AppFooter, AppNavbar } from '@/components/Layout';
import { useDrawer } from '@/hooks';
import { LOGO, TITLE } from '@/settings';
import { ScrollToTop } from '@/utils';
import { useAlertStore } from '@/stores/alert';

export interface SiteLinkType {
  to: string;
  key: string;
  footer: boolean;
  navbar: boolean;
}

export const LINKS: SiteLinkType[] = [
  {
    to: '/',
    key: 'Home',
    footer: false,
    navbar: true,
  },
  {
    to: '/about',
    key: 'About',
    footer: true,
    navbar: true,
  },
  {
    to: '/contact',
    key: 'Contact',
    footer: true,
    navbar: true,
  },
  {
    to: '/services',
    key: 'Services',
    footer: true,
    navbar: true,
  },
  {
    to: '/posts',
    key: 'Posts',
    footer: true,
    navbar: true,
  },

  {
    to: '/WIP',
    key: 'WIP',
    footer: true,
    navbar: true,
  },
];

type LayoutProviderProps = {
  children: React.ReactNode;
};

export const LayoutProvider: FC<LayoutProviderProps> = ({ children }) => {
  const { isDrawerOpen, handleDrawer } = useDrawer();
  const { alertState, closeAlert } = useAlertStore();

  return (
    <Router>
      {alertState.open && <Alert alert={alertState} onClose={() => closeAlert()} />}
      <AppNavbar menuButton menuOpen={isDrawerOpen} menuOnClick={handleDrawer} links={LINKS} />
      <AppDrawer
        open={isDrawerOpen}
        handleClose={handleDrawer}
        companyIcon={LOGO}
        companyTitle={TITLE}
      />
      {children}

      <ScrollToTop />
      <ScrollToTopFAB />
      <AppFooter links={LINKS} />
    </Router>
  );
};
