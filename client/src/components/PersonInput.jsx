import React, { PropTypes, Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';

class PersonInput extends Component {
  static componentDidMount() {
    document.getElementById('firstname').focus();
  }

  constructor(props) {
    super(props);

    // why do we do this?
    this.onAddPersonClick = this.onAddPersonClick.bind(this);
    this.onClearPersonClick = this.onClearPersonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    // initial state
    this.state = {
      firstnameInput: '',
      lastnameInput: '',
    };
  }

  onAddPersonClick() {
    this.props.addPerson({
      firstname: this.state.firstnameInput,
      lastname: this.state.lastnameInput,
    });

    // return to default state after submitting
    this.setState({
      firstnameInput: '',
      lastnameInput: '',
    });

    document.getElementById('firstname').focus();
  }

  onClearPersonClick() {
    this.props.clearPerson();
  }

  handleChange(event) {
    // sets the state according to input value change
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <FormControl
          type="text" id="firstname" name="firstnameInput" placeholder="First Name"
          value={this.state.firstnameInput}
          onChange={this.handleChange}
        />
        <FormControl
          type="text" id="lastname" name="lastnameInput" placeholder="Last Name"
          value={this.state.lastnameInput}
          onChange={this.handleChange}
        />
        <br />
        <Button onClick={this.onAddPersonClick}>Add Person</Button>
        <Button onClick={this.onClearPersonClick}>Clear</Button>
      </div>
    );
  }
}

PersonInput.propTypes = {
  addPerson: PropTypes.func.isRequired,
  clearPerson: PropTypes.func.isRequired,
};

export default PersonInput;
