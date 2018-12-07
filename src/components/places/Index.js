import React from 'react';
import axios from 'axios';
import PlacesBox from './PlacesBox';
import PlaceMap from '../common/Map';

class PlaceIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: null,
      userPosition: null
    };
    this.getLocation = this.getLocation.bind(this);
    this.getPlaces = this.getPlaces.bind(this);
  }

  getLocation(pos) {
    this.setState({ userPosition: [pos.coords.latitude, pos.coords.longitude]}, () => {
      this.getPlaces();
    });
  }

  getPlaces() {
    axios.get('/api/places')
      .then(res => this.setState({ places: res.data }));
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getLocation, this.getPlaces);
    axios.get('/api/places')
      .then(result => this.setState({ places: result.data }));
  }

  render() {
    return (
      <section className="section">
        <h1 className="title">All the Quiet Places</h1>
        <hr />
        <div className="box-container">
          {this.state.places && this.state.places.map(
            place => <PlacesBox key={place._id} place={place}/>
          )}
        </div>
        <div className="box-container">
          {!this.state.userPosition && !this.state.places
            ?
            <p>Loading map...</p>
            :
            <PlaceMap
              userPosition={this.state.userPosition}
              places={this.state.places} />
          }
        </div>
      </section>
    );
  }
}

export default PlaceIndex;
