import { createStyles } from '@material-ui/core';

const styles = createStyles({
  root: {
    display: 'block',
    height: '100vh',
    width: '100%',
    overflow: 'auto',
    position: 'relative'
  },
  imgCtr: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    zIndex: 0
  },
  imgEl: {
    minWidth: '100%',
    height: '100%',
    objectFit: 'cover'
  }
});

export default styles;
