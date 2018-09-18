import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

interface NavLinkProps {
  to: string;
}

class NavigationLink extends React.Component<NavLinkProps> {

  constructor(props: NavLinkProps) {
    super(props);
  }

  renderLink = (itemProps: any) => <NavLink to={this.props.to} activeClassName='active' {...itemProps} />;

  render() {
    return (
      <Button component={this.renderLink} color='inherit'>
        {this.props.children}
      </Button>
    );
    // return (
    //   <NavLink to={this.props.to} activeClassName='active'>
    //     test
    //   </NavLink>
    // );
  }
}

export default NavigationLink;
