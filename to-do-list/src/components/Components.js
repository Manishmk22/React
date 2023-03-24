import React, { Component } from 'react'

 class Components  extends Component {
  render() {
    const {name} = this.props;
    return (
      <div>{name}</div>
    )
  }
}
export default Components;