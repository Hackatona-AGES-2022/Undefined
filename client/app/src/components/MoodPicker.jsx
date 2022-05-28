import { View, Text } from "react-native";
import React from "react";
import MoodCard from "./MoodCard";
import { Frown, Heart, Meh, Smile } from "react-native-feather";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";

export default function MoodPicker() {
	const [active, setActive] = useState("");
	useEffect(() => {
		AsyncStorage.getItem("mood").then((value) => {
			const data = JSON.parse(value);
			if (data.day < new Date().getDate()) {
				AsyncStorage.setItem("mood", null);
			} else {
				setActive(data.mood);
			}
		});
	}, []);

	return (
		<Container>
			<TouchableOpacity
				onPress={() => {
					setActive("sad");
					AsyncStorage.setItem(
						"mood",
						JSON.stringify({ mood: "sad", day: new Date().getDate() })
					);
				}}
			>
				<MoodCard active={active === "sad"} Icon={Frown} text="Triste" />
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					setActive("meh");
					AsyncStorage.setItem(
						"mood",
						JSON.stringify({ mood: "meh", day: new Date().getDate() })
					);
				}}
			>
				<MoodCard active={active === "meh"} Icon={Meh} text="Meh" />
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					setActive("happy");
					AsyncStorage.setItem(
						"mood",
						JSON.stringify({ mood: "happy", day: new Date().getDate() })
					);
				}}
			>
				<MoodCard active={active === "happy"} Icon={Smile} text="Feliz" />
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					setActive("awesome");
					AsyncStorage.setItem(
						"mood",
						JSON.stringify({ mood: "awesome", day: new Date().getDate() })
					);
				}}
			>
				<MoodCard active={active === "awesome"} Icon={Heart} text="Incrível" />
			</TouchableOpacity>
		</Container>
	);
}

const Container = styled.View`
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	margin-top: 30px;
	margin-bottom: 50px;
`;
