import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

interface NavLinkProps {
  to: string;
}

class NavLink extends React.Component<NavLinkProps> {

  renderLink = (itemProps: any) => <Link to={this.props.to} {...itemProps} />;

  constructor(props: NavLinkProps) {
    super(props);
  }

  render() {
    return (
      <Button component={this.renderLink} color='inherit'>
        {this.props.children}
      </Button>
    );
  }
}

export default NavLink;
