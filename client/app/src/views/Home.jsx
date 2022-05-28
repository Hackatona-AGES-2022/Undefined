import styled from "styled-components/native";
import MoodPicker from "../components/MoodPicker";
import { Title, SubTitle } from "../styles";

export default function Home() {
	return (
		<Container>
			<Title>Olá, Nome</Title>
			<Title>Como você está se sentindo hoje?</Title>
			<SubTitle>Nos diga como você está, nós nos importamos. 🙂</SubTitle>
			<MoodPicker />
		</Container>
	);
}
const Container = styled.View``;
