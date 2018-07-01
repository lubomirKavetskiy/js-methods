import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

const SimpleSelect = ({ valueForSelect, handleChangeValue, data, classes }) => (
  <FormControl className={classes.formControl}>
    <InputLabel htmlFor="age-simple">JS methods</InputLabel>
    <Select
      value={valueForSelect}
      onChange={handleChangeValue}
      name="methods"
      className={classes.selectEmpty}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {data.length &&
        data.map(obj => (
          <MenuItem key={obj._id} value={obj._id}>
            {obj.title}
          </MenuItem>
        ))}
    </Select>

    <FormHelperText>Required</FormHelperText>
  </FormControl>
);

export default SimpleSelect;
