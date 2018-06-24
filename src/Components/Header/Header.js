import React from 'react';
import './Header.css';
import ScrollableAnchor from 'react-scrollable-anchor';

import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({offset: -60, scrollDuration: 200})

const Header = () => {
	return(
		<ScrollableAnchor id={'home'}>
		<div className="headerStyle">
			<article className="vh-100 dt w-100 ">
	  			<div className="dtc v-mid tc white ph3 ph4-l">
	   				 
	   				 <h3 className=" f1-m f-subheadline-l fw3 tc" >Hi my name is Roberto Caldeira</h3>
	   				 <h3 className=" f1-m f-subheadline-l fw3 tc">Welcome to my portfolio!</h3>
	   				 <br/>
	   				 <a className="buttonStyle tc fw6" href='#about'>About Me </a>	   				
	  			</div>
			</article>		
		</div>
		</ScrollableAnchor>
		);
}

export default Header;
