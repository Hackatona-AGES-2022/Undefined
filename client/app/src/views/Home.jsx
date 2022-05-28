import { Text } from "react-native";
import styled from "styled-components/native";

export default function Home() {
	return (
		<Container>
			<Text>Olá, Nome</Text>
			<Text>Como você está se sentindo hoje?</Text>
		</Container>
	);
}
const Container = styled.View``;
