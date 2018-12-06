import React from 'react';
import axios from 'axios';
import {authorizationHeader} from '../../lib/auth';


class PlacesNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    console.log('SUBMITTED');
    event.preventDefault();
    axios.post('/api/places', this.state, authorizationHeader())
      .then(() => this.props.history.push('/places'));
  }

  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value });
  }


  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>Whats the name of your Quite Place?</label>
          <input onChange={this.handleChange}
            value={this.state.name || ''}
            name="name"
          />
          <button>SUBMIT</button>
        </form>
      </section>
    );
  }
}


export default PlacesNew;
