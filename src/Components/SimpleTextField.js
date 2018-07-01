import React from 'react';
import TextField from '@material-ui/core/TextField';

const SimpleTextfield = ({ valueFromTextField, handleChangeValue }) => (
  <TextField
    label="Enter your code"
    multiline
    rowsMax="10"
    value={valueFromTextField}
    onChange={handleChangeValue}
    margin="normal"
  />
);

export default SimpleTextfield;
