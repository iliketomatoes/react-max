import { createStyles } from '@material-ui/core';
import { wrapperMaxWidth } from '../../theme';

const styles = createStyles({
  root: {
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'flex-end',
    margin: '0 auto',
    maxWidth: wrapperMaxWidth,
    padding: '80px 0 40px',
    width: '100%'
  },
  paneContainer: {
    display: 'grid',
    flex: '1 0 auto',
    margin: '0 auto',
    width: '100%'
  },
  onePane: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    maxWidth: wrapperMaxWidth - 550
  },
  twoPanes: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    maxWidth: wrapperMaxWidth - 320
  },
  threePanes: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    maxWidth: wrapperMaxWidth
  }
});

export default styles;
