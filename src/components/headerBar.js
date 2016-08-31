import React, { Component } from 'react';
import '../output.css';


class HeaderBar extends Component {

	constructor(props){
		super(props);

		this.state = {
			toggled: false
		}
	}

	toggleButton(){

		var newState = this.state.toggled ? false : true;

		this.setState({
			toggled: newState
		});
	}

	render() {
		return (
			<div className="App-header" >

				<div className="LogoCase headerElement">
					<div className="logo headerElement" > </div>
					<div className="headerElement">
						<h2> Fonts </h2>
					</div>
				</div>

				<div className={this.props.isOpen ? "actionsOpen" : "actionsClosed"} >
					<div className="actionIcons headerElement">
						<button type="button">
							<i className="material-icons headerElement"> format_color_fill </i>
						</button>
						<button type="button" onClick={this.toggleButton.bind(this)} >
							{this.state.toggled ? <i className="material-icons">chevron_right</i> : <i className="material-icons">search</i> }
						</button>
					</div>

					<div className="links headerElement">
						<ul>
							<li> DIRECTORY </li>
							<li> FEATURED </li>
							<li> ABOUT </li>
						</ul>
					</div>
				</div>

			</div>
		);
	}
}


export default HeaderBar;






