import {Component} from 'react'
import ConfigurationContext from './context/ConfigurationContext'
import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showLeftNavBar: true, showContent: true, showRightNavBar: true}

  onToggleShowContent = () => {
    this.setState(prevState => ({
      showContent: !prevState.showContent,
    }))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prevState => ({showLeftNavBar: !prevState.showLeftNavBar}))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prevState => ({showRightNavBar: !prevState.showRightNavBar}))
  }

  render() {
    const {showContent, showLeftNavBar, showRightNavBar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showLeftNavBar,
          showContent,
          showRightNavBar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="app-content-container">
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
