import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import bridge from "@vkontakte/vk-bridge"
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, Separator } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar , Placeholder} from '@vkontakte/vkui';
import { Icon56NotePenOutline, Icon96NotePenOutline, Icon56MessageOutline } from "@vkontakte/icons"


import Home from './panels/Home';
import Persik from './panels/Persik';
import probabilities from "./probabilities.json"; 

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(null);

	// console.log(popout)
	
	useEffect(() => {

		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		// asy	nc function fetchData() {
			// console.log("FRGRE")	
		 bridge.send('VKWebAppGetUserInfo').then(user => {
			console.log('fregvsrdvgrs')
				setUser(user);
				setPopout(null);
			}).catch((e) => {
				console.log('fregvsrdv')
				console.log(e)
			})
		// }
		// fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
		// setActivePanel("persik")
	};
	/*
	
			
				<View activePanel={activePanel} popout={popout}>
					<Home id='home' fetchedUser={fetchedUser} go={go} />
					<Persik id='persik' go={go} />
				</View>


					<Group header={<Header mode="secondary"></Header>}>
						<Div>
							<Button stretched size="l" mode="secondary" onClick={go}>
								Пройти тест
							</Button>
						</Div>
					</Group>
	*/
	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					{/* <Home id='home' fetchedUser={fetchedUser} go={go} /> */}
					<Persik id='persik' go={go} />
					<Panel id="home">
						<PanelHeader>Мы вместе</PanelHeader>

						<Group>
							<Placeholder
								icon={<Icon56NotePenOutline />}
								header="Узнай вероятность прохождения в финал конкурса!"
								action={<Button size="l" onClick={go} data-to="persik">Узнать!</Button>}>
								Укажи свой ID из личного кабинета БП и получи результат
							</Placeholder>
							<Separator></Separator>
							<Placeholder
								icon={<Icon56MessageOutline />}
								header="Оcтавить отзыв"
								action={<Button size="l" onClick={go} data-to="home">Написать</Button>}>
								Поделитесь обратной связью о приложении
							</Placeholder>
						</Group>
					</Panel>
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
