import React, { Component } from 'react'
import { Button, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import {FaHandHoldingHeart , FaDog, FaUserMd, FaChild, FaHandshake, FaUserFriends} from "react-icons/fa";

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
							<Button onClick={() => this.toggle1()} className="circle secondary">Same day crisis support</Button>
						</Col>
						<Col xs='6'>
							<Button onClick={() => this.toggle2()} className="circle secondary">Brief support visits</Button>
						</Col>
					</Row>
					<Row>
						<Col xs='6'>
							<Button onClick={() => this.toggle3()} className="circle secondary">Short term therapy</Button>
						</Col>
						<Col xs='6'>
							<Button onClick={() => this.toggle4()} className="circle secondary">Group counseling</Button>
						</Col>
					</Row>
					<Row>
						<Col xs='6'>
							<Button onClick={() => this.toggle5()} className="circle secondary">Psych. care + med management</Button>
						</Col>
						<Col xs='6'>
							<Button onClick={() => this.toggle6()} className="circle secondary">Pet therapy</Button>
						</Col>
					</Row>
				</div>

				<Modal isOpen={this.state.modal1} toggle={this.toggle1} className={this.props.className} centered={true} >
          <ModalHeader toggle={this.toggle1}><FaHandHoldingHeart/> Same day crisis support</ModalHeader>
          <ModalBody>
            We offer crisis support during office hours to students with urgent needs.
						This service is available on a first-come, first-served drop-in basis and focuses on addressing
						immediate needs and establishing a plan. If you are in crisis, check in on the first floor of Hall Health
						for same-day care.
						<br /><br />
						Crisis Connections
						This 24 hour, toll-free, telephone hotline provides immediate, confidential assistance to people in distress in the King County area. Call 1-866-4-CRISIS (1-866-427-4747) or 206-461-3222.
          </ModalBody>
        </Modal>

				<Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className} centered={true} >
          <ModalHeader toggle={this.toggle2}> <FaChild/>	Brief support visits</ModalHeader>
          <ModalBody>
            During a 20-minute visit, you will discuss your concerns with a counselor and get
						feedback, advice, and treatment options. This appointment is the first step to getting other
						Hall Health mental health services. You can schedule a brief support visit up to 24 hours in advance.
          </ModalBody>
        </Modal>

				<Modal isOpen={this.state.modal3} toggle={this.toggle3} className={this.props.className} centered={true} >
          <ModalHeader toggle={this.toggle3}><FaHandshake/>  Short term therapy</ModalHeader>
          <ModalBody>
            Short-term therapy helps you clarify concerns, identify goals, and work towards feeling better.
						 Each visit lasts 45-60 minutes and most clients are seen for 12 or fewer sessions.
						 We will help to connect you to longer-term therapy if needed.
          </ModalBody>
        </Modal>

				<Modal isOpen={this.state.modal4} toggle={this.toggle4} className={this.props.className} centered={true} >
          <ModalHeader toggle={this.toggle4}><FaUserFriends/> Group counseling</ModalHeader>
          <ModalBody>
            Some groups are a set length with a focus on developing specific skills,
						while others are open-ended and less structured. All groups are designed to provide a safe and
						welcoming space to receive support.  There is no limit on group therapy. Learn more about our groups and
						find the schedule here.
          </ModalBody>
        </Modal>

				<Modal isOpen={this.state.modal5} toggle={this.toggle5} className={this.props.className} centered={true} >
          <ModalHeader toggle={this.toggle5}><FaUserMd/> Psychiatric care & medication management</ModalHeader>
          <ModalBody>
             Our psychiatric providers can provide you with an evaluation, treatment recommendations,
						 and psychiatric medication management if appropriate.
          </ModalBody>
        </Modal>

				<Modal isOpen={this.state.modal6} toggle={this.toggle6} className={this.props.className} centered={true} >
          <ModalHeader toggle={this.toggle6}><FaDog/>  Pet therapy</ModalHeader>
          <ModalBody>
          Free weekly visits with trained therapy dogs at Hall Health can help address stress as well as
					soothe some symptoms of depression and anxiety.
					Learn more about pet therapy and find the schedule here.
          </ModalBody>
        </Modal>

			</div>
		)
	}
}

export default Resources;
