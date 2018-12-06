import React from 'react';
import axios from 'axios';
import {authorizationHeader} from '../../lib/auth';
import { Link } from 'react-router-dom';


export default class PlaceShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount runs');
    axios.get(`/api/places/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ place: res.data });
      });
  }

  handleDelete() {
    console.log('this.state.place._id is ', this.state.place._id);
    axios.delete(`/api/places/${this.state.place._id}`, authorizationHeader())
      .then(() => this.props.history.push('/places/'));
  }



  // turn edit into a link to edit component

  render() {
    const { place } = this.state;
    console.log('this is place', place);
    if(!place) return null;
    return (
      <section>
        {place
          ?
          <div className="columns is-5">
            <h1> {place.name}</h1>
            <img src={place.image} alt={place.name}/>
          </div>
          :
          <p>Please wait...</p>}
        <button onClick={this.handleDelete}>DELETE</button>
        <Link to={`/places/${this.state.place._id}/edit`}><button>EDIT</button></Link>
      </section>
    );
  }
}
