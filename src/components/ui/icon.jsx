import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon, ...props }) => {
  return (
    <i className={`fa fa-${icon}`} {...props} />
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  icon: 'facebook',
};

export default Icon;
