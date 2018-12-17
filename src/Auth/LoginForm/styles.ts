import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  main: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
    errorMsg: {
      display: 'flex',
      marginBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 2,
    },
    errorIcon: {
      marginRight: 6,
    }
  });

export default styles;
