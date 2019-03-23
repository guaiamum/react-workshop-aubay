import React, { Component } from 'react';
import Input from './input';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      action: '/',
      result: 0,
      num1: 0,
      num2: 0,
    };
  }

  onClick(type) {
    const { num1, num2 } = this.state;
    const result = type === 'mult' ? num1 * num2 : num1 / num2;
    this.setState({ result });
  }

  render() {
    const { action, result } = this.state;
    return (
      <form action={action}>
        <Input
          label="1st Number"
          type="number"
          name="num1"
          value={this.statenum1}
          onChange={({ target: { value } }) => { this.setState({ num1: value }); }}
        />
        <Input
          label="2nd Number"
          type="number"
          name="num2"
          value={this.statenum1}
          onChange={({ target: { value } }) => { this.setState({ num2: value }); }}
        />
        <button className="btn _gr" type="button" onClick={() => this.onClick('mult')}>
          Multiply
        </button>
        <button className="btn _bl" type="button" onClick={() => this.onClick('div')}>
          Divide
        </button>
        <div className="result">{result}</div>
      </form>
    );
  }
}
