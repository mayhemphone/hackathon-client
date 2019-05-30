import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {

	constructor(props){
    super(props);
    this.state = {
      user: this.props.user
    };
  }

	render() {


		return(
			<div>
					
					<header className="App-header">
            {this.state.user ? <h6 className="welcome">Welcome, {this.state.user} </h6> : <h6></h6>}
          </header>

          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/resources">Resources</Link>
						<Link to="/chat">Chat</Link>
          </nav>
        </div>
		)
	}
}

export default Nav;