import styled from "styled-components/native";
import { Settings, AlertTriangle, Home } from "react-native-feather";
import config from "../config";

export default function Footer({ navigation, active }) {
	return (
		<Container>
			<IconWrapper>
				{active.includes("home") ? (
					<Touchable
						onPress={() => {
							navigation.navigate("home");
						}}
					>
						<ActiveWrapper>
							<Home stroke="#fff" strokeWidth="2" />
						</ActiveWrapper>
						<ActiveIconText>Inicio</ActiveIconText>
					</Touchable>
				) : (
					<Touchable
						onPress={() => {
							navigation.navigate("home");
						}}
					>
						<Home stroke={config.colors.disabled} strokeWidth="2" />
						<IconText>Inicio</IconText>
					</Touchable>
				)}
			</IconWrapper>
			<IconWrapper>
				{active.includes("panic") ? (
					<Touchable
						onPress={() => {
							navigation.navigate("panic");
						}}
					>
						<ActiveWrapper>
							<AlertTriangle stroke="#fff" strokeWidth="2" />
						</ActiveWrapper>

						<ActiveIconText>Pânico</ActiveIconText>
					</Touchable>
				) : (
					<Touchable
						onPress={() => {
							navigation.navigate("panic");
						}}
					>
						<AlertTriangle stroke={config.colors.disabled} strokeWidth="2" />
						<IconText>Pânico</IconText>
					</Touchable>
				)}
			</IconWrapper>
			<IconWrapper>
				{active.includes("configurations") ? (
					<Touchable
						onPress={() => {
							navigation.navigate("configurations");
						}}
					>
						<ActiveWrapper>
							<Settings stroke="#fff" strokeWidth="2" />
						</ActiveWrapper>

						<ActiveIconText>Configurações</ActiveIconText>
					</Touchable>
				) : (
					<Touchable
						onPress={() => {
							navigation.navigate("configurations");
						}}
					>
						<Settings stroke={config.colors.disabled} strokeWidth="2" />
						<IconText>Configurações</IconText>
					</Touchable>
				)}
			</IconWrapper>
		</Container>
	);
}
const Container = styled.View`
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
	height: 70px;
	background-color: #fff;
	box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.1);
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 0 20px;
`;
const IconWrapper = styled.View`
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 80px;
`;
const IconText = styled.Text`
	font-size: 10px;
	color: ${config.colors.disabled};
	margin-top: 3px;
	font-weight: 500;
`;
const ActiveIconText = styled.Text`
	font-size: 10px;
	color: ${config.colors.primary};
	margin-top: 3px;
	font-weight: 600;
`;
const ActiveWrapper = styled.View`
	padding: 5px;
	background-color: ${config.colors.primary};
	border-radius: 7px;
`;
const Touchable = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 80px;
`;
