import { CSSProperties } from '@mui/material/styles/createTypography';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React from 'react';

import BackArrow from '@src/icons/back-arrow.svg';

const useStyles = makeStyles(() => ({
  pageContainerRoot: {
    position: 'relative',
    width: '100%',
  },
  buttonWrapper: {
    zIndex: 9,
    position: 'absolute',
    cursor: 'pointer',
    top: 35,
    left: 35,
    '& svg': {
      transform: 'scale(1.8)',
      height: '100%',
    },
  },
}));

type Props = {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
  hideBackArrow?: boolean;
};

export const PageContainer = (props: Props) => {
  const classes = useStyles();
  return (
    <div style={props.style} className={clsx(classes.pageContainerRoot, props.className)}>
      {props.hideBackArrow ? null : (
        <div className={classes.buttonWrapper}>
          <BackArrow onClick={() => window.history.back()} />
        </div>
      )}
      {props.children}
    </div>
  );
};
