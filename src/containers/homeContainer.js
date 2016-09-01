import { connect } from 'react-redux';
//import * as AppActions from '../actions/appActions';
import App from '../App.js';


const mapStateToProps = (state) => {

	console.log(state);

	return {
		isOpen: state.app.headerState
	}
}


const mapDispatchToProps = (dispatch) => {
	return {

	}
}

const HomeContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

export default HomeContainer;