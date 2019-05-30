import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col, Form, Input } from 'reactstrap';

class Home extends Component {
	constructor(props){
    super(props);
    this.state = {
      user: null,
      userTemp: null
    };
  }

 handleUserChange = (e) => { this.setState({ userTemp: e.target.value }); }

handleSubmit = (e) => {
	e.preventDefault()
	this.setState({ user: this.state.userTemp })

}

	render() {
		return(
			<div className="container">
			 <Row>
	      <Col xs='12'>
	        <Card body>
	          <CardTitle>Hey there,</CardTitle>
	          <CardText>What can I call you?</CardText>
	          	<Form onSubmit={this.handleSubmit}>
								<Input name="user" placeholder="Name or nickname?" value={this.state.userTemp} onChange={this.handleUserChange} />
								<br />
	          	<Button block type="submit">Ready</Button>
	          </Form>
	          <p>{this.state.user}</p>
	        </Card>
	      </Col>

	     </Row>
			</div>
		)
	}
}

export default Home;
