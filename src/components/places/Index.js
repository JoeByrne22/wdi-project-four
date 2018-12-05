import React from 'react';
import axios from 'axios';
import PlacesBox from './PlacesBox';

class PlaceIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }


  getWonders() {
    axios.get('/api/places')
      .then(res => this.setState({ places: res.data }));
  }

  componentDidMount() {
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
      </section>
    );
  }
}
export default PlaceIndex;
