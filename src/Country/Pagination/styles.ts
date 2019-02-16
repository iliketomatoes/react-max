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
    list: {
      display: 'flex',
      listStyleType: 'none',
      margin: '20px 0',
      padding: '0',
    },
    listItem : {
      flex: '0 1 24px',
    },
    listItemActive : {
      backgroundColor: 'green'
    }
  };
});

export default useStyles;
