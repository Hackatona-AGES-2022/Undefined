import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import ActivityCard from "./ActivityCard";

export default function ActivityPicker({ navigation }) {
	return (
		<Container>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("home.diary");
				}}
			>
				<ActivityCard
					title="Diário da Gratidão"
					subtitle="Seja mais feliz a longo prazo!"
				/>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("home.03-reasons");
				}}
			>
				<ActivityCard
					title="03 Reasons Why"
					subtitle="Seu dia não foi tãaoo ruim assim."
				/>
			</TouchableOpacity>
		</Container>
	);
}
const Container = styled.View`
	margin-top: 30px;
`;
