import React from 'react';

class Flash extends React.Component {
  constructor(props) {
    super(props);
    this.flashMessage = {};
    this.state = {};
    this.clearMessage = this.clearMessage.bind(this);
  }

  createFlashMessage(message, type) {
    this.flashMessage.message = message;
    this.flashMessage.type = type;
  }

  getFlashMessage() {
    return this.flashMessage;
  }

  clearFlashMessage() {
    this.flashMessage.message = null;
    this.flashMessage.type = null;
  }

  componentDidUpdate() {
    const flash = this.getFlashMessage();
    // If there IS a flash message and
    // we haven't already set it on state
    if (!this.state.flash && flash.message) {
      this.setState({ flash: flash });
      setTimeout(this.clearMessage, 3000);
    }
  }

  clearMessage() {
    this.clearFlashMessage();
    this.setState({ flash: null });
  }

  render() {
    return (
      <div className="flash-container">
        {this.state.flash &&
          <div className={`notification is-${this.state.flash.type}`}>
            <button className="delete" onClick={this.clearMessage}></button>
            <p>{this.state.flash.message}</p>
          </div>
        }
      </div>
    );
  }
}

export default Flash;
