import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import probabilities from "../probabilities.json"; 


const Home = ({id}) => (
	<Panel id="">
		<PanelHeader>Super runner</PanelHeader>
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell>
				
			</Cell>
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
