import * as React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

interface CountryPaginationProps {
  visibleItems: number;
  totalItems: number;
  activeIndex: number;
}

const CountryPagination: React.FunctionComponent<CountryPaginationProps> = (props) => {

  const classes = useStyles({});
  const { visibleItems, totalItems, activeIndex } = props;

  // Amount of buttons to be used for pagination
  const buttonsLength = Math.round(totalItems / visibleItems);

  return (
    <div>
      <ul className={classes.list}>
      {Array(buttonsLength).fill(null).map((value, index) =>
          <li key={index} className={(activeIndex === index + 1) ? [classes.listItem, classes.listItemActive].join(' ') : classes.listItem}>
            <Link to={{ search: `page=${(index + 1)}` }}>{index + 1}</Link>
          </li>
      )}
      </ul>
    </div>
  );

};

export default CountryPagination;
