import { createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) => createStyles({
  root: {
    display: 'flex',
    flexFlow: 'wrap',
    width: '100%',
    margin: '0 0 20px'
  },
  formControl: {
    margin: spacing.unit,
  },
});

export default styles;
