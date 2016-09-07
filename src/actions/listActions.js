import * as types from './actionTypes';


export function selectFont( F ){
	return {
		type: types.SELECTTHISFONT,
		font: F
	}
}