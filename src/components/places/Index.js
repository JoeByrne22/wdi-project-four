import React from 'react';
import axios from 'axios';
import PlacesBox from './PlacesBox';
import PlaceMap from '../common/Map';


class PlaceIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: null,
      userPosition: null,
      mapMode: true
    };
    this.getLocation = this.getLocation.bind(this);
    this.getPlaces = this.getPlaces.bind(this);
    this.toggleMapMode = this.toggleMapMode.bind(this);
  }

  toggleMapMode() {
    const newMode = !this.state.mapMode;
    this.setState({ mapMode: newMode });


  }

  getLocation(pos) {
    console.log('this is pos', pos);
    this.setState({ userPosition: [pos.coords.latitude, pos.coords.longitude]}, () => {
      console.log('this is this.state', this.state);
      this.getPlaces();
    });
  }

  getPlaces() {
    axios.get('/api/places')
      .then(res => this.setState({ places: res.data }));
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getLocation, this.getPlaces);
  }

  render() {
    return (
      <section className="section">
        <h1 className="title">All the Quiet Places</h1>
        <hr />
        {
          (this.state.mapMode === true)
            ?
            <button onClick={this.toggleMapMode}>PLACES</button>
            :
            <button onClick={this.toggleMapMode}>MAP</button>
        }
        {!this.state.mapMode && <div className="box-container">
          {this.state.places && this.state.places.map(
            place => <PlacesBox key={place._id} place={place}/>
          )}
        </div>}
        {this.state.mapMode && <PlaceMap places={this.state.places} userPosition={this.state.userPosition} />}

      </section>
    );
  }
}

export default PlaceIndex;
