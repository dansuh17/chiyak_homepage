// PeopleContainer.jsx
// Use this file as reference to create redux connection for React component.
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as peopleActions from '../actions/people-actions';
import PeopleList from './PeopleList';
import PersonInput from './PersonInput';

// Stateful component template
class PeopleContainer extends Component {
  constructor(props) {
    super(props);

    // initial state - list of people
    // this has nothing to do with store's state
    this.state = {
      people: [],
    };
  }

  render() {
    const { people } = this.props;  // connected to the state

    return (
      <div>
        <PersonInput
          addPerson={this.props.actions.addPerson}
          clearPerson={this.props.actions.clearPerson}
        />
        <PeopleList people={people} />
      </div>
    );
  }
}

// There are two elements in props - people and actions
PeopleContainer.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
  })),
  // this part comes from people-actions.js
  actions: PropTypes.shape({
    addPerson: PropTypes.func,
    clearPerson: PropTypes.func,
  }),
};

// indicate that the STORE's STATE (not this component's state) PEOPLE is equal to the PROP'S PEOPLE
const mapStateToProps = state => ({
  people: state.people,
});

// indicate that the IMPORTED ACTIONS (peopleActions) are equal to PROP'S ACTIONS
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(peopleActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
