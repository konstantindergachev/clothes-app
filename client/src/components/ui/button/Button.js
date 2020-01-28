import PropTypes from 'prop-types';
import React from 'react';
import './Button.scss';

const Button = ({ type, classname, value, func }) => {
  if (type) {
    return (
      <button
        type={type}
        className={`${classname ? classname : ''} btn`}
        onClick={func}
      >
        {value}
      </button>
    );
  } else {
    return (
      <button
        className={`${classname ? classname : ''} btn`}
        onClick={() => func()}
      >
        {value}
      </button>
    );
  }
};

Button.propTypes = {
  type: PropTypes.string,
  classname: PropTypes.string,
  value: PropTypes.string.isRequired,
  func: PropTypes.func,
};

export default Button;
