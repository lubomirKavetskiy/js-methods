import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

const SimpleSelect = ({
  selectTitle,
  valueForSelect,
  handleChangeValue,
  data,
  classes,
}) => (
  <form autoComplete="off" className="container">
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="age-simple">{selectTitle}</InputLabel>
      <Select
        value={valueForSelect}
        onChange={handleChangeValue}
        name="methods"
        className={classes.selectEmpty}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {data &&
          data.map(obj => (
            <MenuItem
              key={obj._id}
              value={obj._id}
              className={`${obj.mutator ? 'mutator' : ''} ${
                obj.iteration ? 'iteration' : ''
              }`}
            >
              {obj.title}
            </MenuItem>
          ))}
      </Select>

      <FormHelperText>Required</FormHelperText>
    </FormControl>
  </form>
);

export default SimpleSelect;
