import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { Container, Header, Content, Body, ListItem, Text } from "native-base";

const forums = [
	{
		title: "Help with Personal Investments",
		subtitle: "Have a question about your personal investments? No matter how simple or complex, you can ask it here.",
		url: "https://www.bogleheads.org/forum/feed.php?f=1&mode=topics_active&limit=100",
		key: 1
	},
	{
		title: "Theory, News & General",
		subtitle: "Discuss all general (i.e. non-personal) investing questions and issues, investing news, and theory.",
		url: "https://www.bogleheads.org/forum/feed.php?f=10",
		key: 2
	},
	{
		title: "Personal Finance (Not Investing)",
		subtitle: "Non-investing personal finance issues including insurance, credit, real estate, taxes, employment and legal issues such as trusts and wills",
		url: "https://www.bogleheads.org/forum/feed.php?f=2",
		key: 3
	},
	{
		title: "Personal Consumer Issues",
		subtitle: "Questions on how we spend our money and our time - consumer goods and services, home and vehicle, leisure and recreational activities",
		url: "https://www.bogleheads.org/forum/feed.php?f=11",
		key: 4
	},
	{
		title: "Local Chapters and Bogleheads Community",
		subtitle: "Local Chapters, Wiki, and general Bogleheads community discussion, news, events, and announcements",
		url: "https://www.bogleheads.org/forum/feed.php?f=9",
		key: 5
	},
	{
		title: "Forum Issues and Administration",
		subtitle: "Discussions about the forum and contents",
		url: "https://www.bogleheads.org/forum/feed.php?f=3",
		key: 6
	}
];

export default class ForumList extends Component {
	renderItem({ item }) {
		console.log(item);
		return (
			<ListItem
				onPress={() => {
					Actions.subforum({ title: item.title });
				}}
			>
				<Body
					style={{ alignItems: "center", justifyContent: "center" }}
				>
					<Text> {item.title} </Text>
					<Text note> {item.subtitle} </Text>
				</Body>
			</ListItem>
		);
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header />
				<FlatList
					data={forums}
					renderItem={this.renderItem.bind(this)}
				/>
			</View>
		);
	}
}
