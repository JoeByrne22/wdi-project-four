import React from 'react';
import axios from 'axios';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/register', this.state)
      .then(() => {
        console.log('you are register', this.state);
        this.props.history.push('/login');
      });
  }

  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email</label>
        <input name="email" onChange={this.handleChange} value={this.state.email || ''}/>
        <label>Username</label>
        <input name="username" onChange={this.handleChange} value={this.state.username || ''}/>
        <label>Password</label>
        <input name="password" onChange={this.handleChange} value={this.state.password || ''}/>
        <button>Sign up</button>
      </form>
    );
  }
}

export default Register;
