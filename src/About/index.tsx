import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import ApiQuery from 'src/Api/Query';
import { makeQuery } from 'src/Api/functions';

interface Country {
  name: string;
  code: string;
}

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

const About = () => {
  return (
    <ApiQuery query={GET_COUNTRIES} defaultValue={{countries: []}}>{({ started, failed, data }) => {
        if (started) return 'Loading...';
        if (failed) return `Failed!`;
        return <div>{data.countries.length}</div>;
    }}</ApiQuery>
  );
};

export default hot(About);
