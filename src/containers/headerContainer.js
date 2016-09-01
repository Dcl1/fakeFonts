import { connect } from 'react-redux';
import * as HeaderActions from '../actions/headerActions';
import HeaderBar from '../components/headerBar';


const mapStateToProps = (state) => {
	return {
		isOpen: state.headerState
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleClick: () => {
			dispatch(HeaderActions.toggleheader())
		}
	}
}


const HeaderContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderBar)

export default HeaderContainer