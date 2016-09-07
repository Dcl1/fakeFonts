import { connect } from 'react-redux';
import * as ShelfActions from '../actions/shelfActions';
import FontShelf from '../components/fontShelf';


const mapStateToProps = (state) => {
	return {
		fontss: state.app.selectFonts
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		clearFonts: () => {
			dispatch(ShelfActions.clearFonts())
		}
	}
}


const ShelfContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FontShelf)


export default ShelfContainer;