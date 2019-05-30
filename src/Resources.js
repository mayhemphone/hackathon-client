import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col, Form, Input } from 'reactstrap';
import {  Link } from 'react-router-dom';

class Resources extends Component {
	constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }


	render() {
		return(
      <div className="container">
				<div className="container">
					<Card body className="allcards">
						<CardText>Resources</CardText>
					</Card>
				</div>
				<div className="container">
					<Row className="row_card_resource">
						<Col xs='6'>
							<Card body className="allcards">
								<CardText>Same day crisis support</CardText>
							</Card>
						</Col>
						<Col xs='6'>
							<Card body className="allcards">
								<CardText>Brief support visits</CardText>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col xs='6'>
							<Card body className="allcards">
								<CardText>Short term therapy</CardText>
							</Card>
						</Col>
						<Col xs='6'>
							<Card body className="allcards">
								<CardText>Group counseling</CardText>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col xs='6'>
							<Card body className="allcards">
								<CardText>Psych. care + med management</CardText>
							</Card>
						</Col>
						<Col xs='6'>
							<Card body className="allcards">
								<CardText>Pet therapy</CardText>
							</Card>
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

export default Resources;
