import { View, Text } from "react-native";
import styled from "styled-components/native";
import ActivityCard from "./ActivityCard";

export default function ActivityPicker() {
	return (
		<Container>
			<ActivityCard
				title="Diário da Gratidão"
				subtitle="Seja mais feliz a longo prazo!"
			/>
			<ActivityCard
				title="03 Reasons Why"
				subtitle="Seu dia não foi tãaoo ruim assim."
			/>
		</Container>
	);
}
const Container = styled.View`
	margin-top: 30px;
`;
