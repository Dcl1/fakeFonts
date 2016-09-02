import React, { Component } from 'react';
import '../output.css';

class ListActionBar extends Component {

	constructor(props){

		super(props);

		this.state = {
			range: 0
		}
	}

	showValue(val){
		this.setState({
			range: val
		})
	}

	render() {
		return (
			<div className="listActionBar">

				<div className="actionBarSeg left">
					<div className="actionBarItem">
						<p> Sentence </p>
					</div>
					<div className="actionBarItem">
						
						<i className="material-icons">expand_more</i>
					
					</div>
				</div>

				<div className="actionBarSeg center">
					<p> 400px </p>
				</div>

				<div className="actionBarSeg right">
					<div className="actionBarItem"> 
						<input type="range" name="pixels" min="0" max="50" onchange={this.showValue(this.value)} />
					</div>
				</div>
			</div>
		);
	}
}

export default ListActionBar;












