import React from 'react';
import Card from '../Card/Card.js';
import './PortfolioList.css'


const PortfolioList = ({sites}) => {
console.log(sites)
	return(
		
		<div className="listStyle">
			{
				sites.map((siteData, i) =>{
					console.log(siteData.name)

					return (
						<Card		 				
			 				id={i} 
			 				name={siteData.name}
			 				description={siteData.description}
			 				link={siteData.link}
			 				imageLink={siteData.imageLink}
						 />
			 			);
				})
			}
		</div>
		
		);
}

export default PortfolioList;