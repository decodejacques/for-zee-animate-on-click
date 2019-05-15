import ReactDOM from 'react-dom'
import './main.css'
import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            toggled: true
        }
    }
    toggle = () => {
        this.setState({ toggled: !this.state.toggled })
    }
    render = () => {
        let classes = "animated-div"
        if (this.state.toggled) classes += " toggled-div"
        else classes += " untoggled-div"
        return (<div className={classes} onClick={this.toggle}>
            hello
        </div>)
    }
}


ReactDOM.render(<App />, document.getElementById("root"))