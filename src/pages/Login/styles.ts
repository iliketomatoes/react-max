import { createStyles, Theme } from '@material-ui/core';

const styles = ({ palette, spacing }: Theme) => createStyles({
  root: {
    display: 'block',
    height: '100vh',
    width: '100%',
    overflow: 'auto',
    position: 'relative'
  },
  grid: {
    height: '100%'
  },
  card: {
    maxWidth: 380,
    margin: spacing.unit * 2,
    padding: `20px`,
    zIndex: 10
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
