import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col, Form, Input,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
								<Link onClick={() => this.toggle()} >
									<Card body className="allcards">
										<CardText>Same day crisis support</CardText>
									</Card>
								</Link>
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

				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

			</div>
		)
	}
}

export default Resources;
