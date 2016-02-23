import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <input type="text" style={style}/>
    )
  }
}

const style = {
  outline: 'none',
  borderRadius: 3,
  padding: 10,
  boxSizing: 'border-box'
}
