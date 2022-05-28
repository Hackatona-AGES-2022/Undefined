import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SubTitle, Title } from "../styles";
import styled from "styled-components/native";
import config from "../config";
import { PlusCircle } from "react-native-feather";
import DiaryCard from "../components/DiaryCard";

export default function Diary() {
	return (
		<Container>
			<TitleWrapper>
				<View>
					<Title>Diário da Gratidão</Title>
					<SubTitle>Veja como você tem evoluido!</SubTitle>
				</View>
				<TouchableOpacity>
					<PlusCircle size={50} color={config.colors.primary} />
				</TouchableOpacity>
			</TitleWrapper>
			<DiaryCard
				date={new Date()}
				title="Pensamento Diário"
				subtitle="Hoje meu dia foi triste 12312312"
			/>
		</Container>
	);
}

const Container = styled.View``;
const TitleWrapper = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 30px;
`;
