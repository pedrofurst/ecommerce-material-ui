import { StepIconProps } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import clsx from 'clsx';
import React from 'react';
import useStyles from './styles';

function StepIcon(props: StepIconProps) {
  const classes = useStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

export default StepIcon;
