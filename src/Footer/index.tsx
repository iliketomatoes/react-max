import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CodeIcon from '@material-ui/icons/Code';
import useStyles from './styles';

const Footer = () => {

  const classes = useStyles({});

  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Typography component='span' variant='body2' className={classes.span}>
        React Max © {year}
      </Typography>
      <Typography component='span' variant='body2' className={classes.span}>
        Made with a ⌨️ by Giancarlo Soverini
      </Typography>
      <Link href={'https://github.com/iliketomatoes/react-max'} variant='body2' className={classes.span}>
        Source code <CodeIcon fontSize='small' className={classes.icon} />
      </Link>
    </footer>
    );
};

export default hot(Footer);
