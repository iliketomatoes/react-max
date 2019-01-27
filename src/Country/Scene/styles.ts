import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      margin: '0 auto',
      maxWidth: 1280,
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
      width: '100%',
    },
    header: {
      paddingTop: theme.spacing.unit * 4,
      width: '100%',
    },
  };
});

export default useStyles;
