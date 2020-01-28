import React from 'react';
import './Spinner.scss';

const Spinner = () => {
  return (
    <span className="main_loader">
      <span className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </span>
    </span>
  );
};
export default Spinner;
