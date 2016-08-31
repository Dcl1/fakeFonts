import React, { Component } from 'react';
import '../output.css';



class Listitem extends Component {

	getInitialState() {

		return {
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
						{this.state.toggled ? <i className="material-icons grey3">remove_circle_outline</i> : <i className="material-icons primaryColor">add_circle</i> }
					</button>
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













