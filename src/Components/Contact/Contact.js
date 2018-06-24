import React from 'react';
import './Contact.css';
import { Container, Row, Col } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import 'font-awesome/css/font-awesome.min.css';


import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({offset: -60, scrollDuration: 200})

const Contact =() => {
	
	return(
		<ScrollableAnchor id={'contact'}>
			<div className="contactStyle" >
				<article className=" dt w-100 ">
					<h1 className=" f2-m f-subheadline-l fw6 tc">CONTACT</h1>
		   			 <Container>						    
						  <Row className="tc linkButton">
						    <h2 className="ma4">Send me an email</h2>
						     <div className="ma4 tc"><a href="mailto:robertodmcaldeira@gmail.com" className="ma4 tc" >Click To Mail</a></div> 
						  </Row>
						  <br/>
						  <Row className="tc">
						    <h4 className="ma4">Here is my social media platforms feel free to go have a look around.</h4>
						  </Row>
						  <br/>
						   <Row className="tc ">						     
						      <Col xs="6" sm="3" className="contactIcons github">
						        <a href="https://github.com/robertcals"  rel="noopener noreferrer" target="_blank"><i class="fa fa-github fa-4x"></i></a>
						      </Col>  
						      <Col xs="6" sm="3" className="contactIcons linkedin">
						        <a href="https://www.linkedin.com/in/roberto-dm-caldeira/" rel="noopener noreferrer"target="_blank"> <i className="fa fa-linkedin fa-4x"></i></a>
						      </Col>
						      <Col xs="6" sm="3"className="contactIcons freeCodeCamp">
						        <a href="https://www.freecodecamp.org/"  rel="noopener noreferrer" target="_blank"> <i className="fa fa-free-code-camp fa-4x"></i></a>
						      </Col>
						      <Col xs="6" sm="3" className="contactIcons codepen">
						        <a href="https://codepen.io/"  rel="noopener noreferrer" target="_blank"> <i className="fa fa-codepen fa-4x"></i></a>
						      </Col>
						      <Col xs="6" sm="3" className="contactIcons googlePlus">
						        <a href="https://plus.google.com/u/0/109149023727326466626"  rel="noopener noreferrer" target="_blank"><i className="fa fa-google-plus fa-4x"></i></a>
						      </Col> 
						      <Col xs="6" sm="3" className="contactIcons instagram">
						        <a href="https://www.instagram.com/roberto_caldeir/"  rel="noopener noreferrer" target="_blank"> <i className="fa fa-instagram fa-4x"></i></a>
						      </Col>
						      <Col xs="6" sm="3"className="contactIcons pinterest">
						        <a href="https://in.pinterest.com/rigobertocaldei/"  rel="noopener noreferrer" target="_blank"> <i className="fa fa-pinterest fa-4x"></i></a>
						      </Col>
						      <Col xs="6" sm="3"className="contactIcons twitter">
						        <a href="https://twitter.com/CaldeirRoberto"  rel="noopener noreferrer" target="_blank"> <i className="fa fa-twitter fa-4x"></i></a>
						      </Col>						      
						  </Row>
						  <Row className=" tc linkButton">
						    <h2 className="ma4">View my resume </h2> 
						    <div className="ma4 tc"><a href="https://robertcals.github.io/resume/" rel="noopener noreferrer"target="_blank">Resume</a></div>
						  </Row>
					    </Container>
				</article>	
			</div>
		</ScrollableAnchor>
		);
}

export default Contact;