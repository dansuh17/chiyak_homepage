import React, { Component, PropTypes } from 'react';

class StyleButton extends Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      // calls toggleBlockType() at ContentEditor component
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditory-styleButton';
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
