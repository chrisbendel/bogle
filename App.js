import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Actions, Scene, Router } from "react-native-router-flux";
import {
	Container,
	Header,
	Icon,
	Button,
	Footer,
	FooterTab
} from "native-base";
import ForumList from "./Components/ForumList";
import Subforum from "./Components/Subforum";
import Settings from "./Components/Settings";

export default class App extends Component {
	render() {
		return (
			<Container>
				<Router>
					<Scene key="root">
						<Scene
							key="forumlist"
							title="Forums"
							component={ForumList}
						/>
						<Scene
							key="subforum"
							title="SubForum"
							component={Subforum}
						/>
						<Scene
							key="settings"
							title="Settings"
							component={Settings}
						/>
					</Scene>
				</Router>
				<Footer>
					<FooterTab>
						<Button
							vertical
							onPress={() => {
								Actions.forumlist({ type: "reset" });
							}}
						>
							<Icon name="home" />
							<Text>Home</Text>
						</Button>
						<Button
							vertical
							onPress={() => {
								Actions.settings({ type: "reset" });
							}}
						>
							<Icon name="cog" />
							<Text>Settings</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}
