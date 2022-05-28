import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import config from "../config";
import { AsyncStorage } from "react-native";
import { generateId } from "../utils";
import { useState, useEffect } from "react";

export default function AddDiary({ navigation, route }) {
	const id = route.params?.id || "";
	const [title, setTitle] = useState("");
	const [subtitle, setSubtitle] = useState("");
	const [old, setOld] = useState([]);
	const [isEdit, setIsEdit] = useState(false);
	useEffect(() => {
		AsyncStorage.getItem("diary").then((value) => {
			const data = value === null ? [] : JSON.parse(value);
			console.log(id);
			setOld(data);
			data.map((item) => {
				if (item.id === id) {
					setTitle(item.title);
					setSubtitle(item.content);
					setIsEdit(true);
				}
			});
		});
	}, []);
	return (
		<View>
			<TextInput
				placeholder="Titulo"
				style={{ fontSize: 20 }}
				onChangeText={setTitle}
				value={title}
			/>
			<Container>
				<TextInput
					placeholder="Escreva aqui..."
					editable
					multiline
					onChangeText={setSubtitle}
					value={subtitle}
				/>
			</Container>
			<Button
				onPress={async () => {
					if (!isEdit) {
						await AsyncStorage.setItem(
							"diary",
							JSON.stringify([
								...old,
								{
									title: title,
									content: subtitle,
									createdAt: new Date(),
									id: generateId(),
								},
							])
						);
					} else {
						old.map((item) => {
							if (item.id === id) {
								item.title = title;
								item.content = subtitle;
							}
						});
						AsyncStorage.setItem("diary", JSON.stringify(old));
					}
					navigation.navigate("home.diary", { refresh: true });
				}}
			>
				<Text style={{ color: "white", fontWeight: "500" }}>Salvar</Text>
			</Button>
		</View>
	);
}
const Container = styled.View`
	margin-top: 15px;
	margin-bottom: 30px;
`;
const Button = styled.TouchableOpacity`
	background-color: ${config.colors.primary};
	padding: 10px;
	border-radius: 10px;
	margin-top: 10px;
	margin-bottom: 10px;
	align-items: center;
	justify-content: center;
`;
