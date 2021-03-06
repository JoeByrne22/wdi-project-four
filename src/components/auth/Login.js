import React from 'react';
import axios from 'axios';
import { saveToken } from '../../lib/auth';


class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/login', this.state)
      .then(res => {
        saveToken(res.data.token);
      })
      .then(() => this.props.history.push('/places'))
      .catch(() => {
        this.props.history.replace('/login');
      });
  }

  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value});
  }

  render() {
    return (
      <form className="loginForm" onSubmit={this.handleSubmit}>
        <label>Email</label>
        <input name="email" onChange={this.handleChange} value={this.state.email || ''}/>
        <label>Password</label>
        <input name="password" onChange={this.handleChange} value={this.state.password || ''}/>
        <button>Log in</button>
      </form>
    );
  }
}

export default Login;
