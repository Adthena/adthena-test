import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LogSelectionButton extends Component {
  logToConsole = (animal) => {
    const { selected } = this.props;
    console.log(`You clicked: ${animal}`);
  };

  handleClick = () => {
    const { selected } = this.props;
    setTimeout(() => this.logToConsole(selected), 5000);
  };

  render() {
    return (
      <button
        type="button"
        onClick={this.handleClick()}
      >
        <span> Log my click to console</span>
      </button>
    );
  }
}

LogSelectionButton.propTypes = {
  selected: PropTypes.string.isRequired,
};

export default LogSelectionButton;
