import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, List, Cell, Input, Group, Search, SimpleCell, MiniInfoCell, Footer } from '@vkontakte/vkui';

import persik from '../img/persik.png';

import probabilities from "../probabilities.json"; 
import './Persik.css';

const Persik = props => {
	const [currentId, setId] = useState(null);
	// const [probs, setProbs] = useState(null);
	// if(probs === null) {
		// probs = probabilities
	// }
	const changeId = x => {
		console.log(x.target.value)
		setId(x.target.value.split('').filter(c => c >= '0' && c <= '9').join(''))
	}

	let results = Object.keys(probabilities).filter(x => x.startsWith(currentId)).slice(0, 10).sort()
	if(!currentId)  results = [	]

	const display = x => {
		const z = x.currentTarget.innerText
		console.log(z)
	}

	return <Panel id="persik">
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Тест
		</PanelHeader>

		<Group>

				<Search 
									value={currentId ? currentId : ''}
									onChange={changeId}/>

				{results.map((result) => <SimpleCell key={result} onClick={display}>{result}</SimpleCell>)}
				{!!currentId ? '' : <Footer>Начните вводить ID из личного кабинета</Footer>}
		</Group>

		{/* <img className="Persik" src={persik} alt="Persik The Cat"/> */}
	</Panel>
}

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
