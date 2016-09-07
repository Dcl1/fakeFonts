import * as types from './actionTypes';


export function selectThisFont( F ){
	return {
		type: types.SELECTTHISFONT,
		font: F
	}
}