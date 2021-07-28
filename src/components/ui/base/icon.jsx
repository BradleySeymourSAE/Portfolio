import React from  'react';
import PropTypes from 'prop-types';


const Icon = ({ icon, name, ...props }) => {
  return <i className={name} name={name} {...props}>{icon}</i>
};

Icon.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Icon.defaultProps = {
  name: 'material-icons',
  icon: '',
};

export default Icon;
