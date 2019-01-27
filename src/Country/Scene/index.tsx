import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import ApiQuery from 'src/Api/Query';
import { makeQuery } from 'src/Api/functions';
import { Country } from '../types';

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
  return (
    <ApiQuery query={GET_COUNTRIES} defaultValue={{countries: []}}>{({ started, failed, data }) => {
        if (started) return 'Loading...';
        if (failed) return `Failed!`;
        return (data.countries.map((country) =>
          <div key={country.code}>
            {country.name}
          </div>
        ));
    }}</ApiQuery>
  );
};

export default hot(CountryScene);
