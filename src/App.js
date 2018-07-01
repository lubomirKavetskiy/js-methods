import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import DeleteIcon from '@material-ui/icons/Delete';
import AlertDialog from './Components/AlertDialog';
import SimpleSelect from './Components/SimpleSelect';
import SimpleTextfield from './Components/SimpleTextField';
import './App.css';
import { data } from './dataService';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

class App extends React.Component {
  state = {
    valueForSelect: ``,
    valueFromTextField: ``,
    openSnackbar: false,
    Transition: null,
    result: ``,
    openAlertDialog: false,
  };

  handleToggleAlertDialog = () => {
    this.setState({ openAlertDialog: !this.state.openAlertDialog });
  };

  handleRunCode() {
    if (this.state.valueFromTextField.length) {
      this.setState({
        result: eval(this.state.valueFromTextField),
        message: ``,
        openSnackbar: true,
        Transition: TransitionDown,
      });

      if (this.state.valueFromTextField.indexOf(`console.log`) !== -1) {
        this.setState({
          message: `Please, look at console!`,
        });
      }
    }
  }

  handleChangeValue = name => ({ target: { value } }) => {
    if (name === `valueForSelect`) {
      if (value === ``) {
        return this.setState({
          [name]: value,
          openAlertDialog: false,
        });
      }
      return this.setState({
        [name]: value,
        openAlertDialog: true,
      });
    }
    return this.setState({
      [name]: value,
    });
  };

  handleResetCode = () =>
    this.setState({
      ...this.state,
      openSnackbar: false,
      valueFromTextField: ``,
      result: ``,
      message: ``,
    });

  returnExample = () =>
    data
      .filter(d => d._id === this.state.valueForSelect)[0]
      .example.map((ex, index) => <li key={index}>{ex}</li>);

  render() {
    const {
      valueForSelect,
      valueFromTextField,
      openSnackbar,
      result,
      message,
      openAlertDialog,
      Transition,
    } = this.state;

    const { classes } = this.props;

    return (
      <Fragment>
        <form autoComplete="off" className="container">
          <SimpleSelect
            valueForSelect={valueForSelect}
            handleChangeValue={this.handleChangeValue(`valueForSelect`)}
            data={data}
            classes={classes}
          />
          <AlertDialog
            openAlertDialog={openAlertDialog}
            handleToggleAlertDialog={this.handleToggleAlertDialog}
            titleChoosenMethod={
              valueForSelect &&
              `About /*${
                data.filter(d => d._id === valueForSelect)[0].title
              }*/ method`
            }
          >
            <span style={{ display: `block` }}>
              {valueForSelect &&
                `Description: ${
                  data.filter(d => d._id === valueForSelect)[0].description
                }`}
            </span>
            {/* <ul>{valueForSelect && this.returnExample}</ul> */}
            <ul className="example-list">
              Example:
              {valueForSelect &&
                data
                  .filter(d => d._id === this.state.valueForSelect)[0]
                  .example.map((ex, index) => <li key={index}>{ex}</li>)}
            </ul>
          </AlertDialog>
          <br />
          <SimpleTextfield
            valueFromTextField={valueFromTextField}
            handleChangeValue={this.handleChangeValue(`valueFromTextField`)}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => this.handleRunCode()}
          >
            RUN
          </Button>
          <Button
            variant="fab"
            aria-label="delete"
            className={classes.button}
            onClick={this.handleResetCode}
          >
            <DeleteIcon />
          </Button>
          <Snackbar
            open={openSnackbar}
            TransitionComponent={Transition}
            message={
              <div>
                <p id="message-id">{result && JSON.stringify(result)}</p>
                <p>{true && message}</p>
              </div>
            }
          />
        </form>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
