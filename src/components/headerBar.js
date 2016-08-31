import React, { Component } from 'react';
import '../App.css';


class HeaderBar extends Component {
	render() {
		return (
			<div className="App-header" >

				<div className="LogoCase headerElement">
					<div className="logo headerElement" > </div>
					<div className="headerElement">
						<h2> Fonts </h2>
					</div>
				</div>


				<div className="actionIcons headerElement">
					<button type="button">
						<i className="material-icons headerElement"> format_color_fill </i>
					</button>
					<button type="button">
						<i className="material-icons">search</i>
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
		);
	}
}


export default HeaderBar;