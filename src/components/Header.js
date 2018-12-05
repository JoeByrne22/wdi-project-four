import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <div className="navbar-end">
          <Link className="navbar-item" to="/places">INDEX</Link>
          <Link className="navbar-item" to="/">HOME</Link>
          <Link className="navbar-item" to="/places/new">Add a New Place</Link>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
