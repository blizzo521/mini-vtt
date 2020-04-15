// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { addRoll } from "../actions/index";
import { d4, d6, d8, d10, d12, d20 } from '../lib/dice'
import d4Icon from '../assets/d4.png'
import d6Icon from '../assets/d6.png'
import d8Icon from '../assets/d8.png'
import d10Icon from '../assets/d10.png'
import d12Icon from '../assets/d12.png'
import d20Icon from '../assets/d20.png'

function mapDispatchToProps(dispatch) {
  return {
    addRoll: roll => dispatch(addRoll(roll))
  };
}

class ConnectedRoller extends Component {
  constructor(props) {
    super(props);
    this.roll = this.roll.bind(this);
  }

  roll(die, result) {
    this.props.addRoll({ die, result })
  }

  render() {
    return (
      <div>
        <img onClick={() => {this.roll('1d4', d4())}} src={d4Icon} className='die' alt='d4' />
        <img onClick={() => {this.roll('1d6', d6())}} src={d6Icon} className='die' alt='d6' />
        <img onClick={() => {this.roll('1d8', d8())}} src={d8Icon} className='die' alt='d8' />
        <img onClick={() => {this.roll('1d10', d10())}} src={d10Icon} className='die' alt='d10' />
        <img onClick={() => {this.roll('1d12', d12())}} src={d12Icon} className='die' alt='d12' />
        <img onClick={() => {this.roll('1d20', d20())}} src={d20Icon} className='die' alt='d20' />
      </div>
    );
  }
}

const Roller = connect(
  null,
  mapDispatchToProps
)(ConnectedRoller);

export default Roller;
