import React, { PropTypes } from 'react';
import { ListGroupItem } from 'react-bootstrap';

const Person = ({ person }) => (
  <ListGroupItem>
    {person.lastname}, {person.firstname}
  </ListGroupItem>
);

Person.propTypes = {
  person: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
  }),
};

export default Person;
