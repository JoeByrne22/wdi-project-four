import React from 'react';
import axios from 'axios';
import PlacesBox from './PlacesBox';
import PlaceMap from '../common/Map';
import { Marker, Popup} from 'react-leaflet';


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
    this.setState({ userPosition: [pos.coords.latitude, pos.coords.longitude]}, console.log('fuck'), () => {
      console.log('this is this.state', this.state);
      this.getPlaces();
    });
  }

  findMe () {
    console.log('found you');
    const userPosition = ({ lng: 51.51538, lat: -0.07251});
    <Marker position={userPosition}>
      <Popup>
            You!
      </Popup>
    </Marker>;
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
        {
          (this.state.mapMode === true)
            ?
            <button onClick={this.toggleMapMode}>PLACES</button>
            :
            <button onClick={this.toggleMapMode}>MAP</button>
        }

        <button onClick={this.findMe}>Find ME</button>

        {!this.state.mapMode && <div className="box-container">
          {this.state.places && this.state.places.map(
            place => <PlacesBox key={place._id} place={place}/>
          )}
        </div>}
        {this.state.mapMode && <PlaceMap places={this.state.places} userPosition={this.state.userPostion} />}
      </section>
    );
  }
}

export default PlaceIndex;
