import React, { Component } from 'react';
import { Card, Button, CardBody, CardTitle, CardText, Row, Col, Form, Input } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Chat extends Component {
	constructor(props){
    super(props);
    this.state = {
      user: 'Anonymous',
			message:'',
      stage: 0
    };
  }

 handleMessageChage = (e) => { this.setState({ message: e.target.value }); }


  submitChat = (e) =>{
  	e.preventDefault()
  	// this.setState({stage:1})
		axios.post("https://worth-it-server.herokuapp.com/chat",{message: this.state.message })
    .then(response=> {
     console.log(response)
     this.setState({stage:response.data.risk})
    })
    .catch(err => {
      console.log('error axios to server:');
      console.log(err);
    })
  }
	render() {
		if (this.state.stage === 0){
			return(
				<div className="container">
					<div className="title">
						<h3>SUPPORT</h3>
						<p>{this.props.user}, by entering a description of how you feel, our data processing system will create automated responses and provide relevant resources to best meet your needs.</p>
					</div>
					<div className="container">
						<Row className="row_card_resource">
							<Col xs='12'>
		          	<Form onSubmit={this.handleSubmit}>
									<Input className="noGlow" id="chatWindow" type="textarea" name="user" placeholder="Describe what you're feeling..." value={this.state.message} onChange={this.handleMessageChage} />
								</Form>
		          	<Button onClick={this.submitChat} className="float-right secondary" >Submit</Button>
			      </Col>
			     </Row>
				</div>
			</div>
			)
		} else if (this.state.stage === 1) {
			return(
				<div className="container">
				  <div className="title">
						<h3>RESULTS</h3>
						<p>
							We have generated some ideas for you based on your submission.  You can find a full list of resources, including immediate crisis on the <Link to="/resources">Resources</Link> page.
						</p>
					</div>
					<div className="container">
						<Card className="cardMargin">
			        <CardBody>
			          <CardTitle>Destresser</CardTitle>
			          <CardText>Cat fur is the new black . Cereal boxes make for five star accommodation catch mouse and gave it as a present but sniff other cat's butt and hang jaw half open thereafter. Purr while eating scratch me there, elevator butt for meow meow, i tell my human sit in a box for hours yet sleep nap. Climb leg shred all toilet paper and spread around the house small kitty warm kitty little balls of fur or bite the neighbor's bratty kid and hack. Sleep on dog bed, force dog to sleep on floor cry louder at reflection. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked really likes hummus and eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter for touch my tail, i shred your hand purrrr. Sit and stare i like cats because they are fat and fluffy meowing chowing and wowing catch mouse and gave it as a present. Rub face on owner chase mice, or give me attention or face the wrath of my claws or scoot butt on the rug. Lie on your belly and purr when you are asleep freak human out make funny noise mow mow mow mow mow mow success now attack human. Hiss at vacuum cleaner spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce yet spill litter box, scratch at owner, destroy all furniture, especially couch carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Meowwww. Hiss and stare at nothing then run suddenly away. do not try to mix old food with new one to fool me! the cat was chasing the mouse. Meow eat all the power cords cough furball drool need to chase tail. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now walk on car leaving trail of paw prints on hood and windshield and relentlessly pursues moth. Spit up on light gray carpet instead of adjacent linoleum stand with legs in litter box, but poop outside. </CardText>
			        </CardBody>
			      </Card>
		      </div>
				</div>
			)
		} else if (this.state.stage === 2) {
			return(
				<div className="container text-left">
				  <div className="title">
						<h3>RESULTS</h3>
						<p>
							We have generated some ideas for you based on your submission.  You can find a full list of resources, including immediate crisis on the <Link to="/resources">Resources</Link> page.
						</p>
					</div>
					<div className="container">
						<Card className="cardMargin">
			        <CardBody>
			          <CardTitle>Relaxation Teqniques</CardTitle>
			          <CardText>Cat fur is the new black . Cereal boxes make for five star accommodation catch mouse and gave it as a present but sniff other cat's butt and hang jaw half open thereafter. Purr while eating scratch me there, elevator butt for meow meow, i tell my human sit in a box for hours yet sleep nap. Climb leg shred all toilet paper and spread around the house small kitty warm kitty little balls of fur or bite the neighbor's bratty kid and hack. Sleep on dog bed, force dog to sleep on floor cry louder at reflection. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked really likes hummus and eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter for touch my tail, i shred your hand purrrr. Sit and stare i like cats because they are fat and fluffy meowing chowing and wowing catch mouse and gave it as a present. Rub face on owner chase mice, or give me attention or face the wrath of my claws or scoot butt on the rug. Lie on your belly and purr when you are asleep freak human out make funny noise mow mow mow mow mow mow success now attack human. Hiss at vacuum cleaner spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce yet spill litter box, scratch at owner, destroy all furniture, especially couch carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Meowwww. Hiss and stare at nothing then run suddenly away. do not try to mix old food with new one to fool me! the cat was chasing the mouse. Meow eat all the power cords cough furball drool need to chase tail. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now walk on car leaving trail of paw prints on hood and windshield and relentlessly pursues moth. Spit up on light gray carpet instead of adjacent linoleum stand with legs in litter box, but poop outside. </CardText>
			        </CardBody>
			      </Card>
			      <Card className="cardMargin">
			        <CardBody>
			          <CardTitle>Destresser</CardTitle>
			          <CardText>Cat fur is the new black . Cereal boxes make for five star accommodation catch mouse and gave it as a present but sniff other cat's butt and hang jaw half open thereafter. Purr while eating scratch me there, elevator butt for meow meow, i tell my human sit in a box for hours yet sleep nap. Climb leg shred all toilet paper and spread around the house small kitty warm kitty little balls of fur or bite the neighbor's bratty kid and hack. Sleep on dog bed, force dog to sleep on floor cry louder at reflection. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked really likes hummus and eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter for touch my tail, i shred your hand purrrr. Sit and stare i like cats because they are fat and fluffy meowing chowing and wowing catch mouse and gave it as a present. Rub face on owner chase mice, or give me attention or face the wrath of my claws or scoot butt on the rug. Lie on your belly and purr when you are asleep freak human out make funny noise mow mow mow mow mow mow success now attack human. Hiss at vacuum cleaner spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce yet spill litter box, scratch at owner, destroy all furniture, especially couch carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Meowwww. Hiss and stare at nothing then run suddenly away. do not try to mix old food with new one to fool me! the cat was chasing the mouse. Meow eat all the power cords cough furball drool need to chase tail. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now walk on car leaving trail of paw prints on hood and windshield and relentlessly pursues moth. Spit up on light gray carpet instead of adjacent linoleum stand with legs in litter box, but poop outside. </CardText>
			        </CardBody>
			      </Card>
		      </div>
				</div>
			)
	} else if (this.state.stage === 3) {
			return(
				<div className="container text-left">
				  <div className="title">
						<h3>RESULTS</h3>
						<p>
							We have generated some ideas for you based on your submission.  You can find a full list of resources, including immediate crisis on the <Link to="/resources">Resources</Link> page.
						</p>
					</div>
					<div className="container">
						<Card className="cardMargin">
			        <CardBody>
			          <CardTitle>Support Groups</CardTitle>
			          <CardText>Cat fur is the new black . Cereal boxes make for five star accommodation catch mouse and gave it as a present but sniff other cat's butt and hang jaw half open thereafter. Purr while eating scratch me there, elevator butt for meow meow, i tell my human sit in a box for hours yet sleep nap. Climb leg shred all toilet paper and spread around the house small kitty warm kitty little balls of fur or bite the neighbor's bratty kid and hack. Sleep on dog bed, force dog to sleep on floor cry louder at reflection. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked really likes hummus and eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter for touch my tail, i shred your hand purrrr. Sit and stare i like cats because they are fat and fluffy meowing chowing and wowing catch mouse and gave it as a present. Rub face on owner chase mice, or give me attention or face the wrath of my claws or scoot butt on the rug. Lie on your belly and purr when you are asleep freak human out make funny noise mow mow mow mow mow mow success now attack human. Hiss at vacuum cleaner spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce yet spill litter box, scratch at owner, destroy all furniture, especially couch carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Meowwww. Hiss and stare at nothing then run suddenly away. do not try to mix old food with new one to fool me! the cat was chasing the mouse. Meow eat all the power cords cough furball drool need to chase tail. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now walk on car leaving trail of paw prints on hood and windshield and relentlessly pursues moth. Spit up on light gray carpet instead of adjacent linoleum stand with legs in litter box, but poop outside. </CardText>
			        </CardBody>
			      </Card>
			      <Card className="cardMargin">
			        <CardBody>
			          <CardTitle>Relaxation Teqniques</CardTitle>
			          <CardText>Cat fur is the new black . Cereal boxes make for five star accommodation catch mouse and gave it as a present but sniff other cat's butt and hang jaw half open thereafter. Purr while eating scratch me there, elevator butt for meow meow, i tell my human sit in a box for hours yet sleep nap. Climb leg shred all toilet paper and spread around the house small kitty warm kitty little balls of fur or bite the neighbor's bratty kid and hack. Sleep on dog bed, force dog to sleep on floor cry louder at reflection. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked really likes hummus and eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter for touch my tail, i shred your hand purrrr. Sit and stare i like cats because they are fat and fluffy meowing chowing and wowing catch mouse and gave it as a present. Rub face on owner chase mice, or give me attention or face the wrath of my claws or scoot butt on the rug. Lie on your belly and purr when you are asleep freak human out make funny noise mow mow mow mow mow mow success now attack human. Hiss at vacuum cleaner spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce yet spill litter box, scratch at owner, destroy all furniture, especially couch carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Meowwww. Hiss and stare at nothing then run suddenly away. do not try to mix old food with new one to fool me! the cat was chasing the mouse. Meow eat all the power cords cough furball drool need to chase tail. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now walk on car leaving trail of paw prints on hood and windshield and relentlessly pursues moth. Spit up on light gray carpet instead of adjacent linoleum stand with legs in litter box, but poop outside. </CardText>
			        </CardBody>
			      </Card><Card className="cardMargin">
			        <CardBody>
			          <CardTitle>Destresser</CardTitle>
			          <CardText>Cat fur is the new black . Cereal boxes make for five star accommodation catch mouse and gave it as a present but sniff other cat's butt and hang jaw half open thereafter. Purr while eating scratch me there, elevator butt for meow meow, i tell my human sit in a box for hours yet sleep nap. Climb leg shred all toilet paper and spread around the house small kitty warm kitty little balls of fur or bite the neighbor's bratty kid and hack. Sleep on dog bed, force dog to sleep on floor cry louder at reflection. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked really likes hummus and eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter for touch my tail, i shred your hand purrrr. Sit and stare i like cats because they are fat and fluffy meowing chowing and wowing catch mouse and gave it as a present. Rub face on owner chase mice, or give me attention or face the wrath of my claws or scoot butt on the rug. Lie on your belly and purr when you are asleep freak human out make funny noise mow mow mow mow mow mow success now attack human. Hiss at vacuum cleaner spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce yet spill litter box, scratch at owner, destroy all furniture, especially couch carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Meowwww. Hiss and stare at nothing then run suddenly away. do not try to mix old food with new one to fool me! the cat was chasing the mouse. Meow eat all the power cords cough furball drool need to chase tail. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now walk on car leaving trail of paw prints on hood and windshield and relentlessly pursues moth. Spit up on light gray carpet instead of adjacent linoleum stand with legs in litter box, but poop outside. </CardText>
			        </CardBody>
			      </Card>
		      </div>
				</div>
			)
	} else if (this.state.stage === 4) {
			return(
				<div className="container text-left">
				  <div className="title">
						<h3>RESULTS</h3>
						<p>
							We have generated some ideas for you based on your submission.  You can find a full list of resources, including immediate crisis on the <Link to="/resources">Resources</Link> page.
						</p>
					</div>
					<div className="container">
						<Card className="cardMargin">
			        <CardBody>
			          <CardTitle>Counseling Services</CardTitle>
			          <CardText>Cat fur is the new black . Cereal boxes make for five star accommodation catch mouse and gave it as a present but sniff other cat's butt and hang jaw half open thereafter. Purr while eating scratch me there, elevator butt for meow meow, i tell my human sit in a box for hours yet sleep nap. Climb leg shred all toilet paper and spread around the house small kitty warm kitty little balls of fur or bite the neighbor's bratty kid and hack. Sleep on dog bed, force dog to sleep on floor cry louder at reflection. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked really likes hummus and eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter for touch my tail, i shred your hand purrrr. Sit and stare i like cats because they are fat and fluffy meowing chowing and wowing catch mouse and gave it as a present. Rub face on owner chase mice, or give me attention or face the wrath of my claws or scoot butt on the rug. Lie on your belly and purr when you are asleep freak human out make funny noise mow mow mow mow mow mow success now attack human. Hiss at vacuum cleaner spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce yet spill litter box, scratch at owner, destroy all furniture, especially couch carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Meowwww. Hiss and stare at nothing then run suddenly away. do not try to mix old food with new one to fool me! the cat was chasing the mouse. Meow eat all the power cords cough furball drool need to chase tail. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now walk on car leaving trail of paw prints on hood and windshield and relentlessly pursues moth. Spit up on light gray carpet instead of adjacent linoleum stand with legs in litter box, but poop outside. </CardText>
			        </CardBody>
			      </Card>
			      <Card className="cardMargin">
			        <CardBody>
			          <CardTitle>Support Groups</CardTitle>
			          <CardText>Cat fur is the new black . Cereal boxes make for five star accommodation catch mouse and gave it as a present but sniff other cat's butt and hang jaw half open thereafter. Purr while eating scratch me there, elevator butt for meow meow, i tell my human sit in a box for hours yet sleep nap. Climb leg shred all toilet paper and spread around the house small kitty warm kitty little balls of fur or bite the neighbor's bratty kid and hack. Sleep on dog bed, force dog to sleep on floor cry louder at reflection. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked really likes hummus and eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter for touch my tail, i shred your hand purrrr. Sit and stare i like cats because they are fat and fluffy meowing chowing and wowing catch mouse and gave it as a present. Rub face on owner chase mice, or give me attention or face the wrath of my claws or scoot butt on the rug. Lie on your belly and purr when you are asleep freak human out make funny noise mow mow mow mow mow mow success now attack human. Hiss at vacuum cleaner spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce yet spill litter box, scratch at owner, destroy all furniture, especially couch carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Meowwww. Hiss and stare at nothing then run suddenly away. do not try to mix old food with new one to fool me! the cat was chasing the mouse. Meow eat all the power cords cough furball drool need to chase tail. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now walk on car leaving trail of paw prints on hood and windshield and relentlessly pursues moth. Spit up on light gray carpet instead of adjacent linoleum stand with legs in litter box, but poop outside. </CardText>
			        </CardBody>
			      </Card>
			      <Card className="cardMargin">
			        <CardBody>
			          <CardTitle>Relaxation Teqniques</CardTitle>
			          <CardText>Cat fur is the new black . Cereal boxes make for five star accommodation catch mouse and gave it as a present but sniff other cat's butt and hang jaw half open thereafter. Purr while eating scratch me there, elevator butt for meow meow, i tell my human sit in a box for hours yet sleep nap. Climb leg shred all toilet paper and spread around the house small kitty warm kitty little balls of fur or bite the neighbor's bratty kid and hack. Sleep on dog bed, force dog to sleep on floor cry louder at reflection. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked really likes hummus and eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter for touch my tail, i shred your hand purrrr. Sit and stare i like cats because they are fat and fluffy meowing chowing and wowing catch mouse and gave it as a present. Rub face on owner chase mice, or give me attention or face the wrath of my claws or scoot butt on the rug. Lie on your belly and purr when you are asleep freak human out make funny noise mow mow mow mow mow mow success now attack human. Hiss at vacuum cleaner spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce yet spill litter box, scratch at owner, destroy all furniture, especially couch carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Meowwww. Hiss and stare at nothing then run suddenly away. do not try to mix old food with new one to fool me! the cat was chasing the mouse. Meow eat all the power cords cough furball drool need to chase tail. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now walk on car leaving trail of paw prints on hood and windshield and relentlessly pursues moth. Spit up on light gray carpet instead of adjacent linoleum stand with legs in litter box, but poop outside. </CardText>
			        </CardBody>
			      </Card><Card className="cardMargin">
			        <CardBody>
			          <CardTitle>Destresser</CardTitle>
			          <CardText>Cat fur is the new black . Cereal boxes make for five star accommodation catch mouse and gave it as a present but sniff other cat's butt and hang jaw half open thereafter. Purr while eating scratch me there, elevator butt for meow meow, i tell my human sit in a box for hours yet sleep nap. Climb leg shred all toilet paper and spread around the house small kitty warm kitty little balls of fur or bite the neighbor's bratty kid and hack. Sleep on dog bed, force dog to sleep on floor cry louder at reflection. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked really likes hummus and eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter for touch my tail, i shred your hand purrrr. Sit and stare i like cats because they are fat and fluffy meowing chowing and wowing catch mouse and gave it as a present. Rub face on owner chase mice, or give me attention or face the wrath of my claws or scoot butt on the rug. Lie on your belly and purr when you are asleep freak human out make funny noise mow mow mow mow mow mow success now attack human. Hiss at vacuum cleaner spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce yet spill litter box, scratch at owner, destroy all furniture, especially couch carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Meowwww. Hiss and stare at nothing then run suddenly away. do not try to mix old food with new one to fool me! the cat was chasing the mouse. Meow eat all the power cords cough furball drool need to chase tail. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now walk on car leaving trail of paw prints on hood and windshield and relentlessly pursues moth. Spit up on light gray carpet instead of adjacent linoleum stand with legs in litter box, but poop outside. </CardText>
			        </CardBody>
			      </Card>
		      </div>
				</div>
			)
	} else if (this.state.stage === 5) {
			return(
				<div className="container text-left">
				  <div className="title">
						<h3>RESULTS</h3>
						<p>
							We have generated some ideas for you based on your submission.  You can find a full list of resources, including immediate crisis on the <Link to="/resources">Resources</Link> page.
						</p>
					</div>
					<div className="container">
						<Card className="cardMargin">
			        <CardBody>
			          <CardTitle>Crisis Support Line</CardTitle>
			          <CardText>Cat fur is the new black . Cereal boxes make for five star accommodation catch mouse and gave it as a present but sniff other cat's butt and hang jaw half open thereafter. Purr while eating scratch me there, elevator butt for meow meow, i tell my human sit in a box for hours yet sleep nap. Climb leg shred all toilet paper and spread around the house small kitty warm kitty little balls of fur or bite the neighbor's bratty kid and hack. Sleep on dog bed, force dog to sleep on floor cry louder at reflection. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked really likes hummus and eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter for touch my tail, i shred your hand purrrr. Sit and stare i like cats because they are fat and fluffy meowing chowing and wowing catch mouse and gave it as a present. Rub face on owner chase mice, or give me attention or face the wrath of my claws or scoot butt on the rug. Lie on your belly and purr when you are asleep freak human out make funny noise mow mow mow mow mow mow success now attack human. Hiss at vacuum cleaner spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce yet spill litter box, scratch at owner, destroy all furniture, especially couch carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Meowwww. Hiss and stare at nothing then run suddenly away. do not try to mix old food with new one to fool me! the cat was chasing the mouse. Meow eat all the power cords cough furball drool need to chase tail. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now walk on car leaving trail of paw prints on hood and windshield and relentlessly pursues moth. Spit up on light gray carpet instead of adjacent linoleum stand with legs in litter box, but poop outside. </CardText>
			        </CardBody>
			      </Card>
			      <Card className="cardMargin">
			        <CardBody>
			          <CardTitle>Counseling Services</CardTitle>
			          <CardText>Cat fur is the new black . Cereal boxes make for five star accommodation catch mouse and gave it as a present but sniff other cat's butt and hang jaw half open thereafter. Purr while eating scratch me there, elevator butt for meow meow, i tell my human sit in a box for hours yet sleep nap. Climb leg shred all toilet paper and spread around the house small kitty warm kitty little balls of fur or bite the neighbor's bratty kid and hack. Sleep on dog bed, force dog to sleep on floor cry louder at reflection. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked really likes hummus and eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter for touch my tail, i shred your hand purrrr. Sit and stare i like cats because they are fat and fluffy meowing chowing and wowing catch mouse and gave it as a present. Rub face on owner chase mice, or give me attention or face the wrath of my claws or scoot butt on the rug. Lie on your belly and purr when you are asleep freak human out make funny noise mow mow mow mow mow mow success now attack human. Hiss at vacuum cleaner spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce yet spill litter box, scratch at owner, destroy all furniture, especially couch carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Meowwww. Hiss and stare at nothing then run suddenly away. do not try to mix old food with new one to fool me! the cat was chasing the mouse. Meow eat all the power cords cough furball drool need to chase tail. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now walk on car leaving trail of paw prints on hood and windshield and relentlessly pursues moth. Spit up on light gray carpet instead of adjacent linoleum stand with legs in litter box, but poop outside. </CardText>
			        </CardBody>
			      </Card>
			      <Card className="cardMargin">
			        <CardBody>
			          <CardTitle>Support Groups</CardTitle>
			          <CardText>Cat fur is the new black . Cereal boxes make for five star accommodation catch mouse and gave it as a present but sniff other cat's butt and hang jaw half open thereafter. Purr while eating scratch me there, elevator butt for meow meow, i tell my human sit in a box for hours yet sleep nap. Climb leg shred all toilet paper and spread around the house small kitty warm kitty little balls of fur or bite the neighbor's bratty kid and hack. Sleep on dog bed, force dog to sleep on floor cry louder at reflection. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked really likes hummus and eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter for touch my tail, i shred your hand purrrr. Sit and stare i like cats because they are fat and fluffy meowing chowing and wowing catch mouse and gave it as a present. Rub face on owner chase mice, or give me attention or face the wrath of my claws or scoot butt on the rug. Lie on your belly and purr when you are asleep freak human out make funny noise mow mow mow mow mow mow success now attack human. Hiss at vacuum cleaner spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce yet spill litter box, scratch at owner, destroy all furniture, especially couch carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Meowwww. Hiss and stare at nothing then run suddenly away. do not try to mix old food with new one to fool me! the cat was chasing the mouse. Meow eat all the power cords cough furball drool need to chase tail. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now walk on car leaving trail of paw prints on hood and windshield and relentlessly pursues moth. Spit up on light gray carpet instead of adjacent linoleum stand with legs in litter box, but poop outside. </CardText>
			        </CardBody>
			      </Card>
			      <Card className="cardMargin">
			        <CardBody>
			          <CardTitle>Relaxation Teqniques</CardTitle>
			          <CardText>Cat fur is the new black . Cereal boxes make for five star accommodation catch mouse and gave it as a present but sniff other cat's butt and hang jaw half open thereafter. Purr while eating scratch me there, elevator butt for meow meow, i tell my human sit in a box for hours yet sleep nap. Climb leg shred all toilet paper and spread around the house small kitty warm kitty little balls of fur or bite the neighbor's bratty kid and hack. Sleep on dog bed, force dog to sleep on floor cry louder at reflection. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked really likes hummus and eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter for touch my tail, i shred your hand purrrr. Sit and stare i like cats because they are fat and fluffy meowing chowing and wowing catch mouse and gave it as a present. Rub face on owner chase mice, or give me attention or face the wrath of my claws or scoot butt on the rug. Lie on your belly and purr when you are asleep freak human out make funny noise mow mow mow mow mow mow success now attack human. Hiss at vacuum cleaner spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce yet spill litter box, scratch at owner, destroy all furniture, especially couch carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Meowwww. Hiss and stare at nothing then run suddenly away. do not try to mix old food with new one to fool me! the cat was chasing the mouse. Meow eat all the power cords cough furball drool need to chase tail. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now walk on car leaving trail of paw prints on hood and windshield and relentlessly pursues moth. Spit up on light gray carpet instead of adjacent linoleum stand with legs in litter box, but poop outside. </CardText>
			        </CardBody>
			      </Card><Card className="cardMargin">
			        <CardBody>
			          <CardTitle>Destresser</CardTitle>
			          <CardText>Cat fur is the new black . Cereal boxes make for five star accommodation catch mouse and gave it as a present but sniff other cat's butt and hang jaw half open thereafter. Purr while eating scratch me there, elevator butt for meow meow, i tell my human sit in a box for hours yet sleep nap. Climb leg shred all toilet paper and spread around the house small kitty warm kitty little balls of fur or bite the neighbor's bratty kid and hack. Sleep on dog bed, force dog to sleep on floor cry louder at reflection. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked really likes hummus and eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter for touch my tail, i shred your hand purrrr. Sit and stare i like cats because they are fat and fluffy meowing chowing and wowing catch mouse and gave it as a present. Rub face on owner chase mice, or give me attention or face the wrath of my claws or scoot butt on the rug. Lie on your belly and purr when you are asleep freak human out make funny noise mow mow mow mow mow mow success now attack human. Hiss at vacuum cleaner spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce yet spill litter box, scratch at owner, destroy all furniture, especially couch carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Meowwww. Hiss and stare at nothing then run suddenly away. do not try to mix old food with new one to fool me! the cat was chasing the mouse. Meow eat all the power cords cough furball drool need to chase tail. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now walk on car leaving trail of paw prints on hood and windshield and relentlessly pursues moth. Spit up on light gray carpet instead of adjacent linoleum stand with legs in litter box, but poop outside. </CardText>
			        </CardBody>
			      </Card>
		      </div>
				</div>
			)
		}
	}
}
export default Chat;
