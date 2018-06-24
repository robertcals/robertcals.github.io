import React from 'react';
import './About.css';
import { Jumbotron } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import Tilt from 'react-tilt';

import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({offset: -60, scrollDuration: 200})

const About = () => {
	return(
		<ScrollableAnchor id={'about'}>
			<div className="aboutStyle" >
				<article className="vh-100 dt w-100 ">
					<h1 className=" f2-m f-subheadline-l fw6 tc">ABOUT ME</h1>
		   			<div className='pa0 mt0'>
						<Tilt className="Tilt  tiltStyle" options={{ max : 10 }}  >
		 					<div className="Tilt-inner  ">
		 						 <img className='tiltStyle'  src='https://dirk005.github.io/resume/images/profile.png' alt='Logo'/> 
		 					</div>
						</Tilt>
					</div>		
					      <Jumbotron className="ma4">    						
					        <p className="lead">Hi, I’m Roberto Caldeira. I’m a Full Stack Web Developer. I have been doing Web development since Sep 2017 and created a web design company <a href="https://focuswebdesign.co.za" rel="noopener noreferrer" target="_blank">Focus Web Design</a> to do web development part time. I push myself t learn new skills every day by doing courses in the field. My full-time job is to develop and maintain a hospital system for <a href="https://arwyp.com" rel="noopener noreferrer" target="_blank">Arwyp Medical Centre</a> using BASIC programming language for the past 8 years. My passion for web development came when we started integrating with dynamic programming into web development for the hospital system where I have created multiple sites for the Hospital link to a web server.   </p>
					        <hr className="my-2" />
					        <p>Thank for viewing my portfolio.</p>
					        <div className="ma4">
					        <p className="lead ">

					         <a className="aboutButtonStyle tc fw6" href='#portfolio'>Portfolio </a>
					          
					        </p>
					        </div>
					      </Jumbotron>					
				</article>	
			</div>
		</ScrollableAnchor>
		);
}

export default About;
