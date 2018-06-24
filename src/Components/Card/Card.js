import React from 'react';
import './Card.css'


const Card  =({ id,name,description,link,imageLink } ) =>{

		return (

		<div className='cardStyle dib br3 pa3 ma2 grow bw2 shadow-5'>
			<h1>{name}</h1>
			<hr/>
			<div>			
				<img src={imageLink} alt={name} />
				<p>{description}</p>
				<p><a href={link}  rel="noopener noreferrer" target="_blank"> View Site</a></p>							
			</div>
		</div>

		);
	}




export default Card;