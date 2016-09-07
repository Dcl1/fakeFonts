import React, { Component } from 'react';
import {bindActionCreators} from 'redux';


import { connect } from 'react-redux';
import * as ListActions from '../actions/listActions';
import ListItem from '../components/listItem';



const mapDispatchToProps = (dispatch) => {
	return {
		selectFont: ( FON ) => {
			dispatch(ListActions.selectThisFont(FON))
		}
	}
}




class ListItemContainer extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { state, actions } = this.props;

		return (

			<ListItem
				fontTitle = {this.props.fontTitle}
				fontInfo = {this.props.fontInfo}
				sentence ={this.props.sentence}
				ChosenFont ={this.props.ChosenFont}
				marginValue = {this.props.marginValue}
				{...actions}
			/>

		);
	}
}


export default connect(state => ({
		state: state
	}),
	(dispatch) => ({
		actions: bindActionCreators( ListActions, dispatch)
	})
)(ListItemContainer);














