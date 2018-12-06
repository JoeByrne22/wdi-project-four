import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken, decodeToken } from '../lib/auth';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    deleteToken();
    this.props.history.push('/');

  }

  render() {
    return (
      <nav>
        <div className="navbar-end">
          <div className="navbar-brand">
            <h2 className="title is-2">Quiet Place</h2>
            {isAuthenticated() && <p>Welcome back! {decodeToken().username}</p>}
          </div>
          <Link className="navbar-item" to="/places">INDEX</Link>
          <Link className="navbar-item" to="/">HOME</Link>
          <Link className="navbar-item" to="/places/new">Add a New Place</Link>
          {isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Log Out</a>}
          <button><Link to="/login">Login</Link></button>
          <button><Link to="/register">Register</Link></button>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
