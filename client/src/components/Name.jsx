import React, { PropTypes } from 'react';

const Name = ({ myname }) => (
  <p>{myname}</p>
);

Name.propTypes = {
  myname: PropTypes.string.isRequired,
};

export default Name;
