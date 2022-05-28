import { View, Text } from "react-native";
import React from "react";
import { Title, SubTitle } from "../styles";
import config from "../config";
import styled from "styled-components/native";
export default function Panic() {
	return (
		<View>
			<Title>O que fazer 🚨</Title>
			<SubTitle>
				Se você está tendo uma crise de ansiedade leia atentamente!
			</SubTitle>
			<ListWrapper>
				<ListTitle>1. Olhe ao seu redor</ListTitle>
				<SubTitle>
					O mundo não está acabando, repita mentalmente o que você enxerga ao
					seu redor.
				</SubTitle>
			</ListWrapper>
			<ListWrapper>
				<ListTitle>2. Olhe ao seu redor</ListTitle>
				<SubTitle>
					Se você está tendo uma crise de ansiedade leia atentamente!
				</SubTitle>
			</ListWrapper>
			<ListWrapper>
				<ListTitle>3. Olhe ao seu redor</ListTitle>
				<SubTitle>
					Se você está tendo uma crise de ansiedade leia atentamente!
				</SubTitle>
			</ListWrapper>
			<Button>
				<Text style={{ color: "#FFF", fontSize: 24 }}>SOCORRO</Text>
			</Button>
		</View>
	);
}
const ListTitle = styled.Text`
	font-size: 16px;
	font-weight: 600;
	color: ${config.colors.primary};
`;
const ListWrapper = styled.View`
	margin-top: 30px;
`;
const Button = styled.TouchableOpacity`
	background-color: ${config.colors.primary};
	padding: 17px;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
`;
