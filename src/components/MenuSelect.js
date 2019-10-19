import React, { Component } from 'react'
import PropTypes from "prop-types";
import MenuItem from './MenuItem'

class MenuSelect extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired
  };

  handleAddItem(index, num) {
    if (this.props.onAddItem) {
      this.props.onAddItem(index, num)
    }
  }

  render () {
    return (
      <table className="table is-striped" >
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>份数</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {this.props.menu.map(el => (
            <MenuItem
              item={el}
              key={el.id}
              index={el.id}
              onAddItem={this.handleAddItem.bind(this)}
            />
          ))}
        </tbody>
      </table>
    )
  }
}

export default MenuSelect