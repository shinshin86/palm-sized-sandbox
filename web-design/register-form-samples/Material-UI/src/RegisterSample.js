import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Toggle from 'material-ui/Toggle';
import TimePicker from 'material-ui/TimePicker';

const styles = {
  formCard: {
    margin: '0 auto',
    padding: 20,
  },
  customWidth: {
    width: 150,
  },
  customSlider: {
    width: 250,
  },
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
    paddingTop: 10,
  },
  radioButton: {
    marginTop: 16,
  },
  radioSelectButton: {
    marginTop: 20,
  },
}
const min = 0;
const max = 100

function transform(value) {
  return value;
}

function reverse(value) {
  return value;
}

export default class RegisterSample extends Component {A
  state = {
    open: false,
    radioOpen: false,
    value: 1,
    slider: 50,
    toggleTitle: "OFF",
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  radioHandleOpen = () => {
    this.setState({radioOpen: true});
  };

  radioHandleClose = () => {
    this.setState({radioOpen: false});
  };

  handleChange = (event, index, value) => this.setState({value});

  handleSlider = (event, value) => {
    this.setState({slider: transform(value)});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    const radioActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.radioHandleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.radioHandleClose}
      />,
    ]

    const radios = [];
    const radioValue = "value:";
    const radioOption = "options:";
    for (let i = 0; i < 30; i++) {
      radios.push(
        <RadioButton
          key={i}
          value={radioValue + i}
          label={radioOption + i}
          style={styles.radioButton}
        />
      );
    }


    return (
      <div style={styles.formCard}>
        <TextField
          hintText="Your Name"
          className="user-name"
        /><br />
        <DatePicker hintText="Landscape Dialog" mode="landscape" />
        <SelectField
          floatingLabelText="Frequency"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
        <br />
        <Slider
            min={min}
            max={max}
            step={max / 100}
            value={reverse(this.state.slider)}
            onChange={this.handleSlider}
           style={styles.customSlider}
          />
        <p>
          <span>{'The value of this slider is: '}</span>
          <span>{this.state.slider}</span>
        </p>

        <div style={styles.radioSelectButton}>
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            <RadioButton
              value="light"
              label="Radio button 1"
              style={styles.radioButton}
            />
            <RadioButton
              value="not_light"
              label="Radio button 2"
              style={styles.radioButton}
            />
          </RadioButtonGroup>
         </div>

        <div style={styles.radioSelectButton}>
          <RaisedButton label="Scrollable Dialog" onClick={this.radioHandleOpen} />
          <Dialog
            title="Scrollable Dialog"
            actions={radioActions}
            modal={false}
            open={this.state.radioOpen}
            onRequestClose={this.radioHandleClose}
            autoScrollBodyContent={true}
          >
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
              {radios}
            </RadioButtonGroup>
          </Dialog>
        </div>

      <div style={styles.block}>
        <Toggle
          label={this.state.toggleTitle}
          style={styles.toggle}
        />
      </div>
      <div>
        <TimePicker
          hintText="12hr Format"
        />
      </div>
        <RaisedButton label="Submit" onClick={this.handleOpen} />
        <Dialog
          title="Register Confirm"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Register this content?
        </Dialog>
      <br />
      </div>
    );
  }
}

