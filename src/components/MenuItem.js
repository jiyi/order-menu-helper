import React, { Component } from 'react'
import PropTypes from "prop-types";

class MenuItem extends Component {

  state = {
    num: 1,
    isClickable: true
  }

  static propTypes = {

  };

  handleChange = e => {
    this.setState({
      [e.target.name]: Number(e.target.value)
    })
  }

  handleAddItem () {
    if (this.props.onAddItem) {
      this.props.onAddItem(this.props.index, this.state.num)
    }
    this.setState({
      isClickable: false
    })
  }

  render () {
    return (
      <tr>
        <td>{this.props.item.id}</td>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.price}</td>
        <td>
          <input
            className="input"
            type="number"
            name="num"
            onChange={this.handleChange}
            value={this.state.num}
            required
          />
        </td>
        <td>
          <button
            className="button"
            onClick={this.handleAddItem.bind(this)}
            disabled={!this.state.isClickable}
          >添加</button>
        </td>
      </tr>
    )
  }
}

export default MenuItem