import React, { Component } from 'react';
import '../output.css';


class RightMenu extends Component {


	constructor(props) {
		super(props);

		this.state = {
			serif: true,
			sans: true,
			display: true,
			handwriting: true,
			monospace: true
		};
	}

	render() {
		return (
			<div className="rightMenuContainer">
				<div className="searchBar">
					<div className="section marg">
						<i className="material-icons search-icon">search</i>
					</div>
					<div className="section" >
						<input type="text" className="search-query" value="Search" />
					</div>
				</div>

				<div className="main">
					<div className="filters">

							<div className="marg">

								<div className="categories">
									<h4> Categories </h4>
									<ul>
										<li> 
											{ this.state.serif ?  <i className="material-icons primaryColor">check_box</i>  : <i className="material-icons sections">check_box_outline_blank</i> }
											<p className=""> Serif </p>
										</li>
										<li> 
											{ this.state.serif ?  <i className="material-icons primaryColor">check_box</i>  : <i className="material-icons sections">check_box_outline_blank</i> }
											<p className=""> Sans Serif </p>
										</li>
										<li> 
											{ this.state.serif ?  <i className="material-icons primaryColor">check_box</i>  : <i className="material-icons sections">check_box_outline_blank</i> }
											<p className=""> Display </p>
										</li>
										<li  > 
											{ this.state.serif ?  <i className="material-icons primaryColor">check_box</i>  : <i className="material-icons sections">check_box_outline_blank</i> }
											<p className=""> Handwriting </p>
										</li>
										<li  > 
											{ this.state.serif ?  <i className="material-icons primaryColor">check_box</i>  : <i className="material-icons sections">check_box_outline_blank</i> }
											<p className=""> Monospace </p>
										</li>
									</ul>
								</div>


								<div className="sorting">
									
									<ul>
										<li>
											<h4> Number of styles </h4>
											<div className="rangeOption">
												<div className="input">
													<i className="material-icons">check_box_outline_blank</i>
												</div>
												<div className="input ranger">
													<input type="range" name="pixels" min="0" max="50"  />
												</div>
											</div>

										</li>
										<li>
											<h4> Thickness </h4>
											<div className="rangeOption">
												<div className="input">
													<i className="material-icons">check_box_outline_blank</i>
												</div>
												<div className="input ranger">
													<input type="range" name="pixels" min="0" max="50"  />
												</div>
											</div>

										</li>
										<li>
											<h4> Slant </h4>
											<div className="rangeOption">
												<div className="input">
													<i className="material-icons">check_box_outline_blank</i>
												</div>
												<div className="input ranger">
													<input type="range" name="pixels" min="0" max="50"  />
												</div>
											</div>

										</li>
										<li>
											<h4> Width </h4>
											<div className="rangeOption">
												<div className="input">
													<i className="material-icons">check_box_outline_blank</i>
												</div>
												<div className="input ranger">
													<input type="range" name="pixels" min="0" max="50"  />
												</div>
											</div>

										</li>
									</ul>
								</div>


						</div>

					</div>

				</div>
			</div>
		);
	}

}



export default RightMenu;



















