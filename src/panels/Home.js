import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Placeholder, List, Footer } from '@vkontakte/vkui';
import probabilities from "../probabilities.json"; 

import bridge from "@vkontakte/vk-bridge"


const Home = ({user, go, realUser}) => (
	<Panel id="result">
		<PanelHeader>Результат</PanelHeader>
		{/* <Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell>
				
			</Cell>
		</Group> */}

		<Group vertical="center">
			{!probabilities[user] ? 
			<Placeholder
				header="Ошибка 404"
				action={<Button size="l" onClick={x => {window.location.hash = ''; go(x);}} data-to="home">На главную страницу</Button>}>
				Вам дали неправильную ссылку!
			</Placeholder> : 
			<Placeholder
				header={`Вероятность победы в полуфинале: ${(probabilities[user] * 100).toFixed(2)}%!`}
				action={<Button size="l" onClick={x => {go(x)	}} data-to="home">На главную страницу</Button>}>
				Поздравляем!<br></br>
				Из 14 миллионов симуляций ты проходишь в финал в {(probabilities[user] * 14).toFixed(1)} миллионах.<br></br>
				<br></br>
				<Button size="l" onClick={x => {
					bridge.send("VKWebAppShowWallPostBox", {
						"message": "Вот моя вероятность пройти в финал Большой Перемены!",
						"attachments": `https://vk.com/app7925819/${window.location.hash}`
					}); 
					// go(x)
				}} data-to="home">Поделись своим результатом!</Button>
				{/* <Footer>Вероятности посчитаны с предположением, что каждый участник полуфинала наберет о</Footer> */}
			</Placeholder>
			}
		</Group>
	</Panel>
);

/*
Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};
*/

export default Home;
