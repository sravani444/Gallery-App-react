import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onStateChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const count = searchInput.length
    return (
      <div className="bg-container">
        <div className="calculate-letters-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="input-text" htmlFor="input">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="Enter the phrase"
            className="input-element"
            value={searchInput}
            onChange={this.onStateChange}
            id="input"
          />
          <div className="count-container">
            <p className="text">No.of letters: {count}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="letters-calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator