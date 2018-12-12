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
          {isAuthenticated() &&
          <div className="column is-0.5">
            <p>Welcome back! {decodeToken().username}</p>
          </div>}
          { !isAuthenticated() && <Link className="logo column is-10" to="/places"><h2>Quiet Place</h2></Link>}
          { isAuthenticated() && <Link className="logo column is-6" to="/places"><h2>Quiet Place</h2></Link>}
          {isAuthenticated() && <Link className="new column is-2" to="/places/new">Add a <div className="newInNew">New</div></Link>}
          <div className="registeration column is-2">
            {isAuthenticated() && <a onClick={this.handleLogout} ><button className="button logOutButton" >Log Out</button></a>}
            {!isAuthenticated() && <button className="button loginButton" ><Link to="/login">Login</Link></button>}
            {!isAuthenticated() && <button className="button registerButton" ><Link to="/register">Register</Link></button>}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
