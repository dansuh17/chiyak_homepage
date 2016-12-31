import React, { PropTypes } from 'react';
import { ListGroup } from 'react-bootstrap';
import Person from './Person';

const PeopleList = ({ people }) => (
  <ListGroup>
    {people.map(person =>
      <Person key={person.lastname} person={person} />,
    )}
  </ListGroup>
);

PeopleList.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
  })),
};

export default PeopleList;
