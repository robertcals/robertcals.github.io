import React from 'react';
import './Portfolio.css';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import PortfolioList from '../PortfolioList/PortfolioList.js';
import Scroll from '../Scroll/Scroll.js';
import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({offset: -60, scrollDuration: 200})

class Portfolio extends React.Component {
	 constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      sites:[],
      viewType: "All"
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
   componentDidMount(){           
         this.getSites();                         
  } 
  getSites = () =>{
  	fetch("https://dirk005.github.io/Projects-json/json/portfolio.json")
  	.then(resp => resp.json())
  	.then(sites => this.setState({sites: sites}))
  	.catch(err => console.log(err))
  }

  setSiteType = (type) =>{
  	console.log(type)
  	switch(type){
  		case 'All':
	  		this.setState({viewType: "All"})
	  		break;
	  	case 'React':
	  		this.setState({viewType: "React"})
	  		break;
	  	case 'WordPress':
	  		this.setState({viewType: "WordPress"})
	  		break;
	  	case 'JavaScript':
	  		this.setState({viewType: "JavaScript"})
	  		break;
	  	case 'Bootstrap':
	  		this.setState({viewType: "Bootstrap"})
	  		break;
	  	case 'Project':
	  		this.setState({viewType: "Project"})
	  		break;
	  	case 'CSS':
	  		this.setState({viewType: "CSS"})
	  		break;
	  	default:
	  		this.setState({viewType: "All"})

  	}  	
  }
  
render(){
	const { sites} = this.state;
      const filterSites = sites.filter(site =>{
       return site.type.includes(this.state.viewType);
    }) 
	return(
		<ScrollableAnchor id={'portfolio'}>
			<div className="portfolioStyle" >
			
				<article className="vh-100 dt w-100 ">
					<h1 className=" f2-m f-subheadline-l fw6 tc">PORTFOLIO</h1>
		   			 <Nav pills className="ma4">
				          <NavItem >
					        <input 
					        	className="pa2 input-reset ba hover-bg-blue hover-white w-100 menuStyle fw6" 
					        	type="submit" 
					        	name="All"  
					        	value="All"  
					        	id="all"
					        	onClick={() => this.setSiteType('All')}
					        />
				            
				          </NavItem>				         
				          <NavItem>
				             <input 
					        	className="pa2 input-reset ba  hover-bg-blue hover-white w-100 menuStyle fw6" 
					        	type="submit"
					        	name="React"
					        	value="React"   
					        	id="React"
					        	onClick={() => this.setSiteType('React')}
					        />
				           
				          </NavItem>
				          <NavItem>
				             <input 
					        	className="pa2 input-reset ba  hover-bg-blue hover-white w-100 menuStyle fw6" 
					        	type="submit"
					        	name="WordPress"
					        	value="WordPress"   
					        	id="WordPress"
					        	onClick={() => this.setSiteType('WordPress')}
					        />
				          </NavItem>
				          <NavItem>
				             <input 
					        	className="pa2 input-reset ba  hover-bg-blue hover-white w-100 menuStyle fw6" 
					        	type="submit"
					        	name="JavaScript"
					        	value="JavaScript"   
					        	id="JavaScript"
					        	onClick={() => this.setSiteType('JavaScript')}
					        />
				          </NavItem>
				          <NavItem>
				             <input 
					        	className="pa2 input-reset ba  hover-bg-blue hover-white w-100 menuStyle fw6" 
					        	type="submit"
					        	name="Bootstrap"
					        	value="Bootstrap"   
					        	id="Bootstrap"
					        	onClick={() => this.setSiteType('Bootstrap')}
					        />
				          </NavItem>
				          <NavItem>
				             <input 
					        	className="pa2 input-reset ba  hover-bg-blue hover-white w-100 menuStyle fw6" 
					        	type="submit"
					        	name="Project"
					        	value="Projects"   
					        	id="Project"
					        	onClick={() => this.setSiteType('Project')}
					        />
				          </NavItem>
				             <NavItem>
				             <input 
					        	className="pa2 input-reset ba  hover-bg-blue hover-white w-100 menuStyle fw6" 
					        	type="submit"
					        	name="CSS"
					        	value="CSS"   
					        	id="CSS"
					        	onClick={() => this.setSiteType('CSS')}
					        />
				          </NavItem>
				        </Nav>	
				        
				         {sites.length !== 0 ? (
				         	<Scroll>
       							<PortfolioList sites={filterSites} />
       						</Scroll>
      						) : (
        					<div></div>
      					)}
				</article>	

			</div>
		</ScrollableAnchor>
		);
}

}

export default Portfolio;
