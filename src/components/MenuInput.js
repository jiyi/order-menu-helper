import React, {Component} from 'react'
import PropTypes from 'prop-types'

class MenuInput extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  }

  state = {
    name: '',
    price: 0,
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const {name, price} = this.state
    const item = {name, price: Number(price)}
    const conf = {
      method: "post",
      body: JSON.stringify(item),
      headers: new Headers({ "Content-Type": "application/json" })
    }
    fetch(this.props.endpoint, conf)
      .then(response => console.log(response))
    this.setState({
      name: '',
      price: 0,
    })
  }



  render() {
    const {name, price} = this.state
    return (
      <div className="column">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="price"
                onChange={this.handleChange}
                value={price}
                required
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              提交
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default MenuInput