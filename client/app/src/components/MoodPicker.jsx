import { View, Text } from "react-native";
import React from "react";
import MoodCard from "./MoodCard";
import { Frown, Heart, Meh, Smile } from "react-native-feather";
import styled from "styled-components/native";

export default function MoodPicker() {
	return (
		<Container>
			<MoodCard Icon={Frown} text="Triste" />
			<MoodCard Icon={Meh} text="Meh" />
			<MoodCard Icon={Smile} text="Feliz" />
			<MoodCard Icon={Heart} text="Incrível" />
		</Container>
	);
}

const Container = styled.View`
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	margin-top: 30px;
`;
