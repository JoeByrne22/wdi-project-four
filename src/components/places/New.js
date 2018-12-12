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
    console.log('this.state', this.state);
    axios.post('/api/places', this.state, authorizationHeader())

      .then(() => this.props.history.push('/places/'));

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
          <label className="newFormLabel">Whats the <strong>name</strong> of your Quite Place...</label>
          <input onChange={this.handleChange}
            value={this.state.name || ''}
            name="name"
            placeholder="Name"
          />
          <label className="newFormLabel">Add <strong>image...</strong></label>
          <input onChange={this.handleChange}
            value={this.state.image || ''}
            name="image"
            placeholder="image URL"
          />
          <label className="newFormLabel">When does it <strong>open</strong>...</label>
          <input onChange={this.handleChange}
            value={this.state.openingHour || ''}
            name="openingHour"
            placeholder="openingHour"
          />
          <label className="newFormLabel">When does it <strong>close</strong>...</label>
          <input onChange={this.handleChange}
            value={this.state.closingHour || ''}
            name="closingHour"
            placeholder="closingHour"
          />
          <label className="newFormLabel">Postcode...</label>
          <input onChange={this.handleChange}
            value={this.state.postcode || ''}
            name="postcode"
            placeholder="postcode"
          />
          <label className="newFormLabel">Where is it...</label>
          <input onChange={this.handleChange}
            // className={errors.location.lat ? 'error' : ''}
            value={this.state.location.lat || ''}
            name="lat"
            placeholder="latitude"
          />
          <label className="newFormLabel">Where is it...</label>
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
