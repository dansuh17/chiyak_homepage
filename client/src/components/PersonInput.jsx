import React, { PropTypes, Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as peopleInputActions from '../actions/people-input-action';

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
    // this state has nothing to do with store's state!
    this.state = {
      firstnameInput: '',
      lastnameInput: '',
    };
  }

  onAddPersonClick() {
    this.props.addPerson({
      firstname: this.props.peopleInput.firstnameInput,
      lastname: this.props.peopleInput.lastnameInput,
    });

    // return to default state after submitting
    this.props.actions.clearName();
    document.getElementById('firstname').focus();
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
  }

  onClearPersonClick() {
    this.props.clearPerson();
  }

  handleChange(event) {
    const newInput = Object.assign({}, this.props.peopleInput);
    newInput[event.target.name] = event.target.value;

    this.props.actions.updateName(newInput);
  }

  render() {
    return (
      <div>
        <FormControl
          type="text" id="firstname" name="firstnameInput" placeholder="First Name"
          value={this.props.peopleInput.firstnameInput}
          onChange={this.handleChange}
        />
        <FormControl
          type="text" id="lastname" name="lastnameInput" placeholder="Last Name"
          value={this.props.peopleInput.lastnameInput}
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
  peopleInput: PropTypes.shape({
    firstnameInput: PropTypes.string,
    lastnameInput: PropTypes.string,
  }),
  actions: PropTypes.shape({
    updateName: PropTypes.func,
    clearName: PropTypes.func,
  }),
  addPerson: PropTypes.func.isRequired,
  clearPerson: PropTypes.func.isRequired,
};

// this maps the store's state ==> this component's props.
// therefore the peopleInput part of state (indicated in /reducers/index.js)
// becomes equal to this.props.peopleInput.
const mapStateToProps = state => ({
  peopleInput: state.peopleInput,
});

// this connects action creators (/reducers/people-input-reducer.js) ==> this component's prop
// by simply calling the function of this component's prop, you can dispatch an action.
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(peopleInputActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonInput);
