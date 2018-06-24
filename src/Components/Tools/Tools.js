import React from 'react';
import './Tools.css';
import { Container, Row, Col } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import { fonts} from '../../font-mfizz/font-mfizz.css'

import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({offset: -60, scrollDuration: 200})

const Tools = () => {
	return(
		<ScrollableAnchor id={'tools'}>
			<div className="aboutStyle" >
				<article className="vh-100 dt w-100 ">
					<h1 className=" f2-m f-subheadline-l fw6 tc">TOOLS</h1>
		   				<Container>
						    <Row className="ma2">
					        	<Col xs="6" sm="3" className="pa4 colStyle"><fonts><i className="icon-git icon iconGit"></i><br/>Git</fonts></Col>
						        <Col xs="6" sm="3" className="pa4 colStyle"><fonts><i className="icon-codepen icon iconCodePen"></i><br/>CodePen</fonts></Col>
						        <Col xs="6" sm="3" className="pa4 colStyle"><fonts><i className="icon-wordpress icon iconWordPress"></i><br/>WordPress</fonts></Col>
						        <Col xs="6" sm="3" className="pa4 colStyle"><fonts><i className="icon-reactjs icon iconReact"></i><br/>React.js</fonts></Col>
				        	</Row>	
				        	 <Row className="ma2">
					        	<Col xs="6" sm="3" className="pa4 colStyle"><fonts><i className="icon-css3-alt icon iconCss3"></i><br/>CSS3</fonts></Col>
						        <Col xs="6" sm="3" className="pa4 colStyle"><fonts><i className="icon-html5-alt icon iconHtml5"></i><br/>HTML5</fonts></Col>
						        <Col xs="6" sm="3" className="pa4 colStyle"><fonts><i className="icon-javascript-alt icon iconJS"></i><br/>JavaScript</fonts></Col>
						        <Col xs="6" sm="3" className="pa4 colStyle"><fonts><i className="icon-nodejs icon iconNode"></i><br/>Node.js</fonts></Col>
				        	</Row>
				        	 <Row className="ma2">
					        	<Col xs="6" sm="3" className="pa4 colStyle"><fonts><i className="icon-google icon iconGoogle"></i><br/>Google</fonts></Col>
						        <Col xs="6" sm="3" className="pa4 colStyle"><fonts><i className="icon-npm icon iconNpm"></i><br/>npm</fonts></Col>
						        <Col xs="6" sm="3" className="pa4 colStyle"><fonts><i className="icon-heroku icon iconHeroku"></i><br/>Heroku</fonts></Col>
						        <Col xs="6" sm="3" className="pa4 colStyle"><fonts><i className="icon-mysql icon iconMySql"></i><br/>MySQL</fonts></Col>
				        	</Row>
				        	 <Row className="ma2">
					        	<Col xs="6" sm="3" className="pa4 colStyle"><fonts><i className="icon-postgres icon iconPostgres"></i><br/>PostgreSQL</fonts></Col>
						        <Col xs="6" sm="3" className="pa4 colStyle"><fonts><i className="icon-bootstrap icon iconBootstrap"></i><br/>Bootstrap</fonts></Col>
						        <Col xs="6" sm="3" className="pa4 colStyle"><fonts><i className="icon-jquery icon iconJquery"></i><br/>jQuery</fonts></Col>
						        <Col xs="6" sm="3" className="pa4 colStyle"><fonts><i className="icon-shell icon iconShell"></i><br/>Command prompt</fonts></Col>
				        	</Row>		
					    </Container>
					  
				</article>	
			</div>
		</ScrollableAnchor>
		);
}

export default Tools;
