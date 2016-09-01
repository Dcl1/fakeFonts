import React, { Component } from 'react';
import '../output.css';

class ListActionBar extends Component {
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
					<input type="range" name="pixels" min="0" max="100" />
				</div>
			</div>
		);
	}
}

export default ListActionBar;