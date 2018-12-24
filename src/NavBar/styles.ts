import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navAuthSection: {
    'align-items': 'center',
    display: 'flex',
  },
  navList: {
    'list-style': 'none',
    margin: 0,
    padding: 0
  },
  navListItem: {
    display: 'inline-block'
  }
});

export default useStyles;
