import React, { Component } from 'react';
import '../output.css';


class FontShelf extends Component {


	constructor(props) {
		super(props);
		
		this.state ={
			up: false
		}

	}


	componentWillReceiveProps(nextProps){
		console.log(nextProps.fontss);
		if(nextProps.fontss.length > 0 ) {


			this.setState({
				up: true
			});
		}

	}


	render() {

		return (

	        <div className={this.state.up ? "selectedFonts isUp" : "selectedFonts"}>
	            <div className="selectedHeader">
	              <h4> Here are your selected fonts </h4>
	            </div>
	            <div>
	              <ul>
	              	{	
	              		this.props.fontss.map(function(obj){
	              			return <li> {obj.title} </li>;
	              		})
	              	}
	              </ul>
	            </div>
	        </div>

		);
	}

}



export default FontShelf;


