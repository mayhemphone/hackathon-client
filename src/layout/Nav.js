import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		return(
			<div>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/resources">Resources</Link>
						<Link to="/chat">Chat</Link>

          </nav>
          <header className="App-header">
            <h6 className="welcome">Welcome, temp </h6>
          </header>

        </div>
		)
	}
}

export default Nav;