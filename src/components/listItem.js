import React, { Component } from 'react';
import '../output.css';

import ListActionBar from './listActionBar.js';

class Listitem extends Component {

	constructor(props){

		super(props);

		this.state = {
			chosenFont: '',
			toggled: false
		};
	}

	componentWillMount() {

		var font =  this.props.ChosenFont ;

		this.setState({
			chosenFont: font
		});

	}


	callFamily(){
		return (
			{
				fontFamily : this.state.chosenFont
			}
		);
	}

	toggleButton(){

		var newState = this.state.toggled ? false : true;

		this.setState({
			toggled: newState
		});

		this.props.selectFont(this.props.fontTitle);


	}


	render() {
		return (
			<li style={{marginRight: this.props.marginValue}} className="listContainer">
				<div className="listHeader">
					<div className="listInfo">
						<h3 className="listText"> {this.props.fontTitle} </h3>
						<h4 className="listText"> {this.props.fontInfo} </h4>
					</div>
					<button type="button" className="listAddBtn" onClick={this.toggleButton.bind(this)} >
						 <i className={ this.state.toggled ? "material-icons primaryColor spin180 addCircle" : "material-icons primaryColor addCircle" }  >add_circle</i>
						 <i className={ this.state.toggled ? "material-icons removeOutline revealRemove" : "material-icons removeOutline" }>remove_circle_outline</i> 
					</button>
				</div>
				<div>
					<ListActionBar />
				</div>
				<div className="listBody">
					<p className="listSentence" style={this.callFamily()}>
						{this.props.sentence}
					</p>
				</div>
			</li>
		);
	}
}

export default Listitem;













