import React from 'react';
import axios from 'axios';
import {authorizationHeader} from '../../lib/auth';


class PlacesNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {}
    };
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
    if(name === 'lat' || name === 'lng') {
      const location = this.state.location;
      location[name] = value;
      this.setState({ location: location });
    } else {
      this.setState({ [name]: value });
    }
  }




  render() {
    return (
      <section>
        <form className="newForm" onSubmit={this.handleSubmit}>
          <label>Whats the name of your Quite Place?</label>
          <input onChange={this.handleChange}
            value={this.state.name || ''}
            name="name"
            placeholder="Name"
          />
          <label>Add image</label>
          <input onChange={this.handleChange}
            value={this.state.image || ''}
            name="image"
            placeholder="image URL"
          />
          <label>When does it open?</label>
          <input onChange={this.handleChange}
            value={this.state.openingHour || ''}
            name="openingHour"
            placeholder="openingHour"
          />
          <label>When does it close?</label>
          <input onChange={this.handleChange}
            value={this.state.closingHour || ''}
            name="closingHour"
            placeholder="closingHour"
          />
          <label>Where is it?</label>
          <input onChange={this.handleChange}
            value={this.state.postcode || ''}
            name="postcode"
            placeholder="postcode"
          />
          <label>Where is it?</label>
          <input onChange={this.handleChange}
            // className={errors.location.lat ? 'error' : ''}
            value={this.state.location.lat || ''}
            name="lat"
            placeholder="latitude"
          />
          <label>Where is it?</label>
          <input onChange={this.handleChange}
            // className={errors.location.lng ? 'error' : ''}
            value={this.state.location.lng || ''}
            name="lng"
            placeholder="longitude"
          />
          <button>SUBMIT</button>
        </form>
      </section>
    );
  }
}


export default PlacesNew;
