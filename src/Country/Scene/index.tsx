import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import Typography from '@material-ui/core/Typography';
import ApiQuery from 'src/Api/Query';
import { makeQuery } from 'src/Api/functions';
import CountryList from 'src/Country/List';
import { Country } from 'src/Country/types';
import useStyles from './styles';

interface QueryResultShape {
  countries: Country[];
}


const GET_COUNTRIES = makeQuery<QueryResultShape>(`
  {
    countries {
      name
      code
    }
  }
`);

const CountryScene = () => {

  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Typography component='h1' variant='display1'>Countries of the world</Typography>
      </header>
      <ApiQuery query={GET_COUNTRIES} defaultValue={{countries: []}}>{({ started, failed, data }) => {
          if (started) return 'Loading...';
          if (failed) return `Failed!`;
          return <CountryList countries={data.countries} />;
      }}</ApiQuery>
    </div>
  );
};

export default hot(CountryScene);
