import styled from "styled-components/native";
import MoodPicker from "../components/MoodPicker";
import ActivityPicker from "../components/ActivityPicker";
import { Title, SubTitle } from "../styles";
export default function Home() {
	return (
		<Container>
			<Title>Olá, Nome</Title>
			<Title>Como você está se sentindo hoje?</Title>
			<SubTitle>Nos diga como você está, nós nos importamos. 🙂</SubTitle>
			<MoodPicker />
			<Title>Atividades para você</Title>
			<SubTitle>Uma seleção especial para melhorar seu mood.</SubTitle>
			<ActivityPicker />
		</Container>
	);
}
const Container = styled.View``;
