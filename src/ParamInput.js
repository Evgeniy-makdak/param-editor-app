import React, { Component } from 'react';

class ParamInput extends Component {
  handleChange = (e) => {
    this.props.updateParamValue(this.props.param.id, e.target.value);
  };

  render() {
    const { param, value } = this.props;
    return (
      <div className='label'>
        <label>{param.name}:</label>
        <input type="text" value={value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default ParamInput;
