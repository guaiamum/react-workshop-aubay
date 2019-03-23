import React, { Component } from 'react';
import { string, node } from 'prop-types';


const getId = name => `fi-${name}`;

export default class Input extends Component {
  //   constructor(props) {
  //     super(props);
  //   }


  render() {
    const {
      name, value, label, ...otherProps
    } = this.props;
    const id = getId(name);
    return (
      <div className="fi-w">
        <label htmlFor={id}>{label}</label>
        <input
          {...otherProps}
          id={id}
          name={name}
          defaultValue={value}
          ref={ref => ref}
        />
      </div>
    );
  }
}

Input.defaultProps = {
  name: '',
  label: '',
  value: 0,
};

Input.propTypes = {
  name: string,
  label: string,
  value: node,
};
