import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
  return {
    footer: {
      display: 'flex',
      flexFlow: 'wrap',
      justifyContent: 'space-between',
      width: '100%',
    },
    span: {
      alignItems: 'center',
      display: 'inline-flex',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      marginTop: theme.spacing.unit / 2,
    },
    icon: {
      marginLeft: 4,
    }
  };
});

export default useStyles;
