import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='form-input'>
    {label ? <label className='form-input__label'>{label}</label> : null}
    <input
      className='form-input__input'
      onChange={handleChange}
      {...otherProps}
    />
  </div>
);

export default FormInput;
