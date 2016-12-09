import React, { Component, PropTypes } from 'react'
import { style } from 'glamor'

class Value extends Component {

  render() {
    return (
      <div>
        <div {...style({color: 'red'})}>
          {this.props.value}
        </div>
        <button onClick={this.props.increment}>inc</button>
      </div>
    )
  }

}

Value.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
}

export default Value
