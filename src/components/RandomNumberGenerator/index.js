import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomNumber: 0,
    }
  }

  generateRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100) // Generates random number between 1 and 100
    this.setState({
      randomNumber,
    })
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="random-number-generator">
        <div className="generator-container">
          <h1>Random Number Generator</h1>
          <p className="number">
            Generate a random number in the range of 0 to 100 : {randomNumber}
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.generateRandomNumber}
          >
            Generate Random Number
          </button>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
