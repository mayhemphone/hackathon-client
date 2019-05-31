import React, { Component } from 'react'
import { Card, Button, CardSubtitle, CardBody, CardTitle, CardText, Row, Col, Form, Input } from 'reactstrap';


class Chat extends Component {
	constructor(props){
    super(props);
    this.state = {
      user: null,
      stage: 0
    };
  }

  submitChat = (e) =>{
  	e.preventDefault()
  	this.setState({stage:1})
  }
	render() {

		if (this.state.stage === 0){
			return(
				<div className="container">
					<div className="title">
						<h3>CHAT</h3>
					</div>
					<div className="container">
						<Row className="row_card_resource">
							<Col xs='12'>
		          	<Form onSubmit={this.handleSubmit}>
									<Input className="noGlow" id="chatWindow" type="textarea" name="user" placeholder="Describe what you're feeling..." value={this.state.user} onChange={this.userChage} />
								</Form> 
		          	<Button onClick={this.submitChat} className="float-right" >Submit</Button>
			      </Col>
			     </Row>
				</div>	
			</div>
			)
		}else{
			return(
				<div className="container">
				 <div className="title">
						<h3>RESULTS</h3>
					</div>
					<Card className="cardMargin">
		        <CardBody>
		          <CardTitle>Card title</CardTitle>
		          <CardSubtitle>Card subtitle</CardSubtitle>
		          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
		          <Button>Button</Button>
		        </CardBody>
		      </Card>
		      <Card className="cardMargin">
		        <CardBody>
		          <CardTitle>Card title</CardTitle>
		          <CardSubtitle>Card subtitle</CardSubtitle>
		          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
		          <Button>Button</Button>
		        </CardBody>
		      </Card>
		      <Card className="cardMargin">
		        <CardBody>
		          <CardTitle>Card title</CardTitle>
		          <CardSubtitle>Card subtitle</CardSubtitle>
		          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
		          <Button>Button</Button>
		        </CardBody>
		      </Card>
			</div>	
			)
		}
	}
}

export default Chat;