import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Card from "./Card";
import config from "../config";
export default function ActivityCard({ title, subtitle }) {
	return (
		<Container>
			<Card>
				<View style={{ padding: 20 }}>
					<Title>{title}</Title>
					<SubTitle>{subtitle}</SubTitle>
				</View>
			</Card>
		</Container>
	);
}
const Container = styled.View`
	max-height: 100px;
	margin-bottom: 10px;
`;
const Title = styled.Text`
	font-size: 16px;
	font-weight: 500;
	color: ${config.colors["purple.800"]};
`;
const SubTitle = styled.Text`
	margin-top: 5px;
	font-size: 14px;
	color: white;
`;
