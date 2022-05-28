import styled from "styled-components/native";
import config from "../config";
export const Title = styled.Text`
	font-size: 20px;
	font-weight: 600;
	color: ${config.colors["gray.600"]};
`;
export const SubTitle = styled.Text`
	font-size: 14px;
	color: ${config.colors.disabled};
	margin-top: 5px;
`;
