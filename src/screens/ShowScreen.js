import React, { useContext } from 'react';
import {View, Text, FlatList, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from "../context/BlogContext";
import {Entypo} from "@expo/vector-icons";
import IndexScreen from "./IndexScreen";

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(Context);

	const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
	return (
		<View>
			<Text>{blogPost.title} </Text>
			<Text>{blogPost.content}</Text>
		</View>
	)
};

ShowScreen.navigationOptions = ({navigation}) => {
	return {
		headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
			<Entypo style={styles.createIcon} name={"edit"}/>
		</TouchableOpacity>
	};
};

const styles = StyleSheet.create({
	createIcon: {
		fontSize: 20,
		paddingRight: 20
	},
});

export default ShowScreen;
