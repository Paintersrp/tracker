import { FC, useState, useEffect, CSSProperties, ReactNode, Fragment } from 'react';
import { css } from '@emotion/react';
import clsx from 'clsx';

import { inject } from '@/theme/utils';
import { ExtendedTheme } from '@/theme/types';

// Will need to set the sidedrawer transform based on the side prop of the component in order
// to build the animation correctly
// keyframes
// essentially only usable on the left atm
const styles = (theme: ExtendedTheme) => ({
  sidedrawer: (isOpen: boolean, variant: string) =>
    css({
      display: 'flex',
      position: 'fixed',
      width: 240,
      boxShadow: theme.shadows[1],
      background: theme.primary,
      zIndex: theme.zIndex.drawer,
      transform: 'translateX(-100%)',
      opacity: 0,
      transition: 'all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      visibility: isOpen || variant === 'permanent' ? 'visible' : 'hidden',
    }),
  left: (isOpen: boolean) =>
    css({
      bottom: 0,
      top: 0,
      left: 0,
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    }),
  right: css({
    right: 0,
    left: 'unset',
    transform: 'translateX(100%)',
  }),
  top: css({
    top: 0,
    right: 0,
    left: 'unset',
    height: 180,
    width: '100%',
    transform: 'translateY(-100%)',
  }),
  bottom: (isOpen: boolean) =>
    css({
      bottom: 0,
      left: 0,
      right: 0,
      top: 'unset',
      height: 180,
      width: '100%',
      transform: isOpen ? 'translateY(0%)' : 'translateY(100%)',
      opacity: isOpen ? 1 : undefined,
    }),
  overlay: (isOpen: boolean) =>
    css({
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: theme.zIndex.drawer,
      background: theme.modalBackdrop,
      transition: 'all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      visibility: isOpen ? 'visible' : 'hidden',
    }),
});

interface DrawerProps {
  open?: boolean;
  onClose?: () => void;
  side?: 'left' | 'right' | 'top' | 'bottom';
  variant?: 'standard' | 'persistent' | 'permanent';
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export const Drawer: FC<DrawerProps> = ({
  open = false,
  onClose = () => {},
  side = 'left',
  variant = 'standard',
  className = '',
  style = {},
  children = null,
}) => {
  const css = inject(styles);
  const [isOpen, setIsOpen] = useState<boolean>(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    if (variant === 'permanent') {
      setIsOpen(true);
    }
  }, [variant]);

  const handleClose = () => {
    onClose();
  };

  const hasOverlay = variant !== 'permanent';

  const sidebarCx = [
    css.sidedrawer(isOpen, variant),
    side === 'bottom' || side === 'left' ? css[side](isOpen) : css[side],
  ];

  return (
    <Fragment>
      {hasOverlay && <div css={css.overlay(isOpen)} onClick={handleClose} />}
      <div css={sidebarCx} style={style} className={clsx(className)}>
        {children}
      </div>
    </Fragment>
  );
};
