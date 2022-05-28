import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Title } from "../styles";
import { ChevronRight } from "react-native-feather";
import config from "../config";

export default function Configurations() {
	return (
		<View>
			<Title>Configurações</Title>
			<Container>
				<ListItem>
					<Text style={{ color: config.colors.primary }}>Conta</Text>
					<ChevronRight stroke={config.colors.primary} strokeWidth="2" />
				</ListItem>
				<ListItem>
					<Text style={{ color: config.colors.primary }}>Pânico</Text>
					<ChevronRight stroke={config.colors.primary} strokeWidth="2" />
				</ListItem>
				<ListItem>
					<Text style={{ color: config.colors.primary }}>Ajuda</Text>
					<ChevronRight stroke={config.colors.primary} strokeWidth="2" />
				</ListItem>
			</Container>
		</View>
	);
}
const Container = styled.View`
	margin-top: 30px;
	flex-direction: column;
`;
const ListItem = styled.TouchableOpacity`
	padding: 20px 0;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
