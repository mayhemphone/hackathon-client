import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col, Form, Input,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {  Link } from 'react-router-dom';

class Resources extends Component {
	constructor(props) {
    super(props);
    this.state = {
      modal1: false,
			modal2: false,
			modal3: false,
			modal4: false,
			modal5: false,
			modal6: false,
    };

    this.toggle1 = this.toggle1.bind(this);
		this.toggle2 = this.toggle2.bind(this);
		this.toggle3 = this.toggle3.bind(this);
		this.toggle4 = this.toggle4.bind(this);
		this.toggle5 = this.toggle5.bind(this);
		this.toggle6 = this.toggle6.bind(this);
  }

  toggle1() {
    this.setState(prevState => ({
      modal1: !prevState.modal1
    }));
  }

	toggle2() {
    this.setState(prevState => ({
      modal2: !prevState.modal2
    }));
  }

	toggle3() {
    this.setState(prevState => ({
      modal3: !prevState.modal3
    }));
  }

	toggle4() {
    this.setState(prevState => ({
      modal4: !prevState.modal4
    }));
  }

	toggle5() {
    this.setState(prevState => ({
      modal5: !prevState.modal5
    }));
  }

	toggle6() {
    this.setState(prevState => ({
      modal6: !prevState.modal6
    }));
  }



	render() {
		return(
      <div className="container">
				<div className="title">
					<h3>RESOURCES</h3>
				</div>
				<div className="container">
					<Row className="row_card_resource">
						<Col xs='6'>
								<Link onClick={() => this.toggle1()} >
										<Button className="circle secondary">Same day crisis support</Button>
								</Link>
						</Col>
						<Col xs='6'>
							<Link onClick={() => this.toggle2()} >
										<Button className="circle secondary">Brief support visits</Button>
							</Link>
						</Col>
					</Row>
					<Row>
						<Col xs='6'>
							<Link onClick={() => this.toggle3()} >
										<Button className="circle secondary">Short term therapy</Button>
							</Link>
						</Col>
						<Col xs='6'>
							<Link onClick={() => this.toggle4()} >
										<Button className="circle secondary">Group counseling</Button>
							</Link>
						</Col>
					</Row>
					<Row>
						<Col xs='6'>
							<Link onClick={() => this.toggle5()} >
										<Button className="circle secondary">Psych. care + med management</Button>
							</Link>
						</Col>
						<Col xs='6'>
							<Link onClick={() => this.toggle6()} >
										<Button className="circle secondary">Pet therapy</Button>
							</Link>
						</Col>
					</Row>
				</div>

				<Modal isOpen={this.state.modal1} toggle={this.toggle1} className={this.props.className} >
          <ModalHeader toggle={this.toggle1}>Same day crisis support</ModalHeader>
          <ModalBody>
            We offer crisis support during office hours to students with urgent needs.
						This service is available on a first-come, first-served drop-in basis and focuses on addressing
						immediate needs and establishing a plan. If you are in crisis, check in on the first floor of Hall Health
						for same-day care.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle1}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle1}>Cancel</Button>
          </ModalFooter>
        </Modal>

				<Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className} >
          <ModalHeader toggle={this.toggle2}>Brief support visits</ModalHeader>
          <ModalBody>
            During a 20-minute visit, you will discuss your concerns with a counselor and get
						feedback, advice, and treatment options. This appointment is the first step to getting other
						Hall Health mental health services. You can schedule a brief support visit up to 24 hours in advance.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle2}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle2}>Cancel</Button>
          </ModalFooter>
        </Modal>

				<Modal isOpen={this.state.modal3} toggle={this.toggle3} className={this.props.className} >
          <ModalHeader toggle={this.toggle3}>Short term therapy</ModalHeader>
          <ModalBody>
            Short-term therapy helps you clarify concerns, identify goals, and work towards feeling better.
						 Each visit lasts 45-60 minutes and most clients are seen for 12 or fewer sessions.
						 We will help to connect you to longer-term therapy if needed.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle3}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle3}>Cancel</Button>
          </ModalFooter>
        </Modal>

				<Modal isOpen={this.state.modal4} toggle={this.toggle4} className={this.props.className} >
          <ModalHeader toggle={this.toggle4}>Group counseling</ModalHeader>
          <ModalBody>
            Some groups are a set length with a focus on developing specific skills,
						while others are open-ended and less structured. All groups are designed to provide a safe and
						welcoming space to receive support.  There is no limit on group therapy. Learn more about our groups and
						find the schedule here.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle4}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle4}>Cancel</Button>
          </ModalFooter>
        </Modal>

				<Modal isOpen={this.state.modal5} toggle={this.toggle5} className={this.props.className} >
          <ModalHeader toggle={this.toggle5}>Psychiatric care & medication management</ModalHeader>
          <ModalBody>
             Our psychiatric providers can provide you with an evaluation, treatment recommendations,
						 and psychiatric medication management if appropriate.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle5}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle5}>Cancel</Button>
          </ModalFooter>
        </Modal>

				<Modal isOpen={this.state.modal6} toggle={this.toggle6} className={this.props.className} >
          <ModalHeader toggle={this.toggle6}>Pet therapy</ModalHeader>
          <ModalBody>
          Free weekly visits with trained therapy dogs at Hall Health can help address stress as well as
					soothe some symptoms of depression and anxiety. 
					Learn more about pet therapy and find the schedule here.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle6}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle6}>Cancel</Button>
          </ModalFooter>
        </Modal>

			</div>
		)
	}
}

export default Resources;
