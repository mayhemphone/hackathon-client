import React, { Component } from 'react'
import { Label, Button, Row, Col, Form, Input } from 'reactstrap';
import { Link } from 'react-router-dom';


class Home extends Component {
	constructor(props){
    super(props);
    this.state = {
      user: this.props.user,
      userTemp: null
    };
  }

	handleUserChange = (e) => { this.setState({ userTemp: e.target.value }); }
	handleSubmit =(e) => {
 		e.preventDefault()
 		this.props.handleNameSubmit(this.state.userTemp)
	}

	handleClickChat = (e) => {
		e.preventDefault()

	}
	handleClickResources= (e) => {
		e.preventDefault() 

	}

	render() {

		if (this.state.user === 'Anonymous') {
			return(
				<div className="container">
				 <Row>
		      <Col xs={{ size: 10, offset: 1 }}>
		        <div className="topContent">
			       	<h1 className="thin">WELCOME</h1>
			       	<h5 className="thin">So glad you're here!</h5>
	       		</div>
		        <div className="bottomContent">
		          <Form onSubmit={this.handleSubmit}>
		          	<Label>What can I call you?</Label>
									<Input name="user" placeholder="Name or nickname?" onChange={this.handleUserChange} />
									
		          	<Button className="float-right secondary" type="submit">Ready</Button>
		          </Form>
		        </div>
		      </Col>
		     </Row>
				</div>
			)
		} else {
			return(
				<div className="container">
					<div className="topContent">
						<Row className="cardMargin">
					    <Col xs={{ size: 10, offset: 1 }}>
								<h3 className="">Welcome, {this.props.user}</h3>
								<p className=""> How can we help you today?</p>
							</Col>
						</Row>
					</div>
					<div className="bottomContent">
						<Row className="cardMargin">
				      <Col xs='6'>
				      <Link to="/chat">
				        <Button className="circle secondary">Support</Button>
				      </Link>
				      </Col>
				      <Col xs='6'>
				        <Link to="/resources">
				        	<Button className="circle secondary" >Resources</Button>
				      	</Link>
				      </Col>
				    </Row>
			    </div>
				</div>

			)
		}
	}
}

export default Home;
