import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { parse } from 'query-string';
import CountryPagination from 'src/Country/Pagination';
import { Country } from '../types';

interface CountryListProps extends RouteComponentProps<any> {
  countries: Country[];
}

const CountryList: React.FunctionComponent<CountryListProps> = (props) => {

  const { countries } = props;
  const query = parse(props.location.search);
  const activeIndex = query.page ? parseInt(query.page as string) : 1;
  const visibleItems = 20;

  const offset = (activeIndex - 1) * visibleItems;
  const visibleCountries = countries.slice(offset, offset + visibleItems);

  return (
    <div>
      <CountryPagination activeIndex={activeIndex} visibleItems={visibleItems} totalItems={countries.length}/>
      {visibleCountries.map((country) =>
        <div key={country.code}>
          {country.name}
        </div>
      )}
    </div>
  );

};

export default withRouter(CountryList);
