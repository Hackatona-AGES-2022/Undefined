import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Card from "./Card";
import config from "../config";
export default function DiaryCard({ title, subtitle, date }) {
	const local_date = new Date(date);
	const month = local_date.toLocaleString("default", { month: "short" });
	return (
		<Container>
			<Card>
				<ContentWrapper>
					<DateWrapper>
						<DateText>{local_date.getDate()}</DateText>
						<DateText>{month}</DateText>
					</DateWrapper>
					<Center style={{ padding: 20 }}>
						<Title>{title}</Title>
						<SubTitle>
							{subtitle.length > 28 && subtitle.substring(0, 26) + "..."}
						</SubTitle>
					</Center>
				</ContentWrapper>
			</Card>
		</Container>
	);
}

const Center = styled.View`
	justify-content: center;
`;

const ContentWrapper = styled.View`
	flex-direction: row;
`;

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
const DateText = styled.Text`
	font-size: 24px;
	color: white;
	font-weight: 600;
	margin-left: 20px;
	text-transform: uppercase;
`;
const DateWrapper = styled.View`
	height: 100px;
	justify-content: center;
	align-items: center;
	flex-directon: column;
	width: 100px;
	text-align: center;
`;
