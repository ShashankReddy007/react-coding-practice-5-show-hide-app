// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  firstNameButton = () => {
    const {firstName} = this.state
    console.log(this.state)

    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  lastNameButton = () => {
    const {lastName} = this.state
    console.log(this.state)

    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading-1">Show/Hide</h1>
        <div className="card-container">
          <div className="button-container">
            <button className="button" onClick={this.firstNameButton}>
              Show/Hide Firstname
            </button>
            {firstName && <p className="para">Joe</p>}
          </div>
          <div className="button-container">
            <button className="button" onClick={this.lastNameButton}>
              Show/Hide Lastname
            </button>
            {lastName && <p className="para">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
