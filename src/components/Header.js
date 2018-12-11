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
        <div className="navbar columns">
          <div className="navbar-brand column is-0.5">
            {isAuthenticated() && <p>Welcome back! {decodeToken().username}</p>}
          </div>
          <Link className="logo column is-6" to="/places"><h2 className="title is-2">Quiet Place</h2></Link>
          {isAuthenticated() && <Link className="new column is-2" to="/places/new">Add a New  Qutie Place</Link>}
          <div className="registeration column is-2">

            {isAuthenticated() && <a onClick={this.handleLogout} ><button>Log Out</button></a>}

            <button><Link to="/login">Login</Link></button>
            <button><Link to="/register">Register</Link></button>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
