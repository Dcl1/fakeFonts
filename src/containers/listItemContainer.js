import { connect } from 'react-redux';
import * as ListActions from '../actions/listActions';
import ListItem from '../components/listItem';


const mapStateToProps = (state) => {
	return {

	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		selectFont: ( FON ) => {
			dispatch(ListActions.selectThisFont(FON))
		}
	}
}