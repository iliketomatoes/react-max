import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
  return {
    main: {
      display: 'flex',
      minHeight: 'calc(100vh - 30px)',
      width: '100%',
    },
  };
});

export default useStyles;
