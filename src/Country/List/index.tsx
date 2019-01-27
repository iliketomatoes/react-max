import * as React from 'react';
import { Country } from '../types';

const CountryList: React.FunctionComponent<{ countries: Country[]}> = (props) => {

  const { countries } = props;

  const page = countries.slice(0, 20);

  return (
    <div>
      {page.map((country) =>
      <div key={country.code}>
        {country.name}
      </div>)}
    </div>
  );

};

export default CountryList;
