import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col, Form, Input } from 'reactstrap';

class Home extends Component {
	constructor(props){
    super(props);
    this.state = {
      user: null
    };
  }
	render() {
		return(
			<div class="welcomeCenter">
			 <Row>
	      <Col xs='12'>
	        <Card body>
	          <CardTitle>Hey there,</CardTitle>
	          <CardText>What can I call you?</CardText>
	          	<Form onSubmit={this.handleSubmit}>
								<Input name="user" placeholder="Name or nickname?" value={this.state.user} onChange={this.userChage} />
								<br />
							</Form>
	          <Button >Ready</Button>
	        </Card>
	      </Col>

	     </Row>
			</div>
		)
	}
}

export default Home;
