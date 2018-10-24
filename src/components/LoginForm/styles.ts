import { createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) => createStyles({
  root: {
    display: 'flex',
    flexFlow: 'wrap',
    width: '100%',
    margin: '0 0 20px'
  },
  formControl: {
    margin: `${spacing.unit}px auto`,
  },
  button: {
    float: 'right',
    marginTop: spacing.unit * 2,
    marginLeft: 'auto',
  },
  errorMsg: {
    width: '100%',
  },
});

export default styles;
