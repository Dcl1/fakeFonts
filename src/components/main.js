import React, { Component } from 'react';
import '../output.css';
import ListItem from './listItem.js';
import ListContainer from '../containers/listItemContainer';

import fontData from '../data/availableFont.json';
import Sentences from '../data/sentences.json';

class Main extends Component {


	constructor(props){
		super(props);

		this.state = {
			fontArray : []
		}
	}


	componentWillMount() {

		//Math.floor(Math.random() * (max - min)) + min;


		var array = fontData.fonts.map(function(e, i){

			var marg = 40;

			
			if(i % 3 === 2) {
				marg = 0
			} else {
				marg = 40
			}

			var number = Math.floor(Math.random() * (Sentences.sentences.length - 0)) + 0;
			//console.log(number);

			var sent = Sentences.sentences[number].text;

			return (
				<ListContainer
					fontTitle={e.title}
					fontInfo={e.info}
					sentence={sent}
					ChosenFont={e.title}
					marginValue = {marg}
					key={Math.floor(Math.random()* 1000000 - 0)}
				/>
			)
		});

		this.setState({
			fontArray: array
		})
	}


	render() {
		return (
			<div className="MainArea" >
				<ol className="listGrid">
					{this.state.fontArray}	

				</ol>
			</div>
		);
	}
}

export default Main;










