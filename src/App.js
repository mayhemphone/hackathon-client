import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Nav from './layout/Nav';
import './App.css';
import Home from './Home';
import Resources from './Resources';
import Chat from './Chat';


class App extends Component {
	constructor(props){
    super(props);
		this.state = {
		      user: null
		    }
		  }
	render() {
	  return (
	    <div className="App">
	 			<Router>
	          <div >
	            <Nav user={this.state.user}/>
		        	<div className="">
		        		<Route path="/" exact component={
			              () => (<Home user={this.state.user} getUser={this.getUser} />)
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

