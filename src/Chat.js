import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col, Form, Input } from 'reactstrap';


class Chat extends Component {
	constructor(props){
    super(props);
    this.state = {
      user: null
    };
  }
	render() {
		return(
			<div className="container">
			 <Row >
	      <Col>
	        <Card body >
	          <CardTitle>What's going on?</CardTitle>
	          <CardText></CardText>
	          	<Form onSubmit={this.handleSubmit}>
								<Input id="chatWindow" type="textarea" name="user" placeholder="Describe what you're feeling..." value={this.state.user} onChange={this.userChage} />
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

export default Chat;