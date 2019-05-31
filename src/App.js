import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Nav from './layout/Nav';
import Home from './Home';
import Resources from './Resources';
import Chat from './Chat';
import './App.css';


class App extends Component {
	constructor(props){
    super(props);
		this.state = {
		      user: null
		    }
		  }

handleNameSubmit = (name) => {
	this.setState({ user: name })

}

	render() {
	  return (
	    <div className="App">
	 			<Router>
	          <div className="mainContainer">
	            <Nav user={this.state.user} />
		        	<div >
		        		<Route path="/" exact component={
			              () => (<Home handleNameSubmit={this.handleNameSubmit} user={this.state.user} />)
			            } />
			            <Route path="/resources"  component={
			              () => (<Resources user={this.state.user} getUser={this.getUser} />)
			            } />
			            <Route path="/chat" component={
			              () => (<Chat user={this.state.user} getUser={this.getUser} />)
			            } />
		            </div>
		          </div>
	        </Router>
	    </div>
	  );
	}
}
export default App;

