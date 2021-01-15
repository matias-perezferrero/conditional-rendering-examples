import React, { Component } from 'react'
import Header from './components/Header'
import Posts from './components/Posts'
import About from './components/About'

class App extends Component {
  constructor() {
    super()

    this.state = {
      componentToDisplay: ""
    }

    this.setComponentToDisplay = this.setComponentToDisplay.bind(this)
  }

  setComponentToDisplay(componentToDisplay) {
    this.setState({
      componentToDisplay
    })
  }

  render() {
    let displayComponent = this.state.componentToDisplay === "posts" ? <Posts /> : this.state.componentToDisplay === "about" ? <About /> : null

    return (
      <div>
        <Header setComponentToDisplay={this.setComponentToDisplay}/>
        {displayComponent}
      </div>
    )
  }
}

export default App