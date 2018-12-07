import React from 'react';
import axios from 'axios';
import {authorizationHeader, isAuthenticated, decodeToken} from '../../lib/auth';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import PlaceMap from '../common/Map';


class PlaceShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {}
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
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

  handleCommentChange = ({ target: { name, value } }) => {
    const comment = { ...this.state.comment, [name]: value };
    this.setState({ comment });
  }

handleCommentSubmit = (e) => {
  e.preventDefault();
  const { id } = this.props.match.params;
  axios.post(`/api/places/${id}/comments`, this.state.comment, authorizationHeader())
    .then(res => this.setState({ place: res.data, comment: {} }));
}

handleCommentDelete = comment => {
  const { id } = this.props.match.params;
  axios
    .delete(`/api/places/${id}/comments/${comment._id}`, authorizationHeader())
    .then(res => this.setState({ place: res.data }));
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
      <Link to={`/places/${place._id}/edit`}className="button">Edit</Link>
      <div>
        <PlaceMap places={[place]} userPosition={null} />
      </div>
      <div>
        <ul>
          {place.comments.map(comment =>
            <li key={comment._id}>
              <p className="title is-4">{comment.text}</p>
              <p className="subtitle is-5">{comment.user.username}</p>
              {decodeToken().sub === comment.user._id && <button
                className="button"
                onClick={() => this.handleCommentDelete(comment)}
              >Delete</button>}
              <hr />
            </li>
          )}
        </ul>
        {isAuthenticated() && <CommentForm
          handleChange={this.handleCommentChange}
          handleSubmit={this.handleCommentSubmit}
          comment={this.state.comment}
        />}
      </div>
    </section>
  );
}
}

export default PlaceShow;
