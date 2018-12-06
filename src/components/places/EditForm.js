import React from 'react';
import axios from 'axios';

class PlacesEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // add in a componentDidMount to get the data from the API Like in show
  componentDidMount() {
    console.log('componentDidMount runs');
    axios.get(`/api/places/${this.props.match.params.id}`)
      .then(res => {
        this.setState( res.data );
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('this is the state', this.state);
    axios.put(`/api/places/${this.props.match.params.id}/edit`, this.state)
      .then((result) => this.props.history.push(`/places/${result.data._id}/`));
  }

  handleChange({ target: { name, value }}) {
    console.log(this.state);
    this.setState({ [name]: value });
  }


  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>Whats the new name of your Quite Place?</label>
          <input onChange={this.handleChange}
            value={this.state.name || ''}
            name="name"
          />
          <button>CHANGE</button>
        </form>
      </section>
    );
  }
}


export default PlacesEdit;
