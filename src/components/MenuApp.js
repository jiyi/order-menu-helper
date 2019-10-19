import React, { Component } from "react";
import MenuSelect from './MenuSelect'
import MenuList from "./MenuList"

const menuEndpoint = "menus/"

class MenuApp extends Component {

  menuObj = {}

  state = {
    menu: [],
    loaded: false,
    placeholder: "Loading...",
    num: 0,
    sum: 0,
  }

  handleAddItem(index, num) {
    // console.log(index + '号菜要了' + num + '份')
    this.setState({
      num: this.state.num + 1,
      sum: this.state.sum + this.menuObj[index].price * num
    })
  }

  componentDidMount() {
    fetch(menuEndpoint)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      })
      .then(data => {
        this.setState({ menu: data, loaded: true })
        data.map(item => {
          this.menuObj[item.id]=item
        })
        console.log(this.menuObj)
      });
  }

  render () {
    return (
      <div>

        <nav className="navbar is-fixed-bottom">点了{this.state.num}道菜， 共{this.state.sum}元</nav>

        <MenuSelect
          menu={this.state.menu}
          onAddItem={this.handleAddItem.bind(this)}
        />
        <MenuList />
      </div>
    )
  }
}

export default MenuApp