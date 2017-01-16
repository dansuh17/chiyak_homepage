import React, { Component, PropTypes } from 'react';
import './StyleButton.css';

class StyleButton extends Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      // calls toggleBlockType() at ContentEditor component
      // pass the style string to toggleBlockType function
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += 'RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

StyleButton.propTypes = {
  onToggle: PropTypes.func.isRequired,
  style: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default StyleButton;
