import { View, Text } from "react-native";
import styled, { css } from "styled-components/native";
import config from "../config";

export default function Card(props) {
	return (
		<Container active={props.active} mood={props.mood}>
			{props.children}
		</Container>
	);
}

const Container = styled.View`
	width: 100%;
	height: 100%;
	background-color: ${config.colors.primary};
	border-radius: 10px;
	box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
	${(props) =>
		(props.mood && props.active) || !props.mood
			? css`
					background-color: ${config.colors.primary};
			  `
			: css`
					background-color: transparent;
					border: 1px solid ${config.colors.primary};
			  `};
`;
