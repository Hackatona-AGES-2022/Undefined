import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import config from "../config";
import Icon from "../../assets/icon.js";
import { ChevronLeft, Bell } from "react-native-feather";
import { TouchableOpacity } from "react-native";
import Header from "../components/Header";

export default function Home() {
	return (
		<View>
			<Text>Olá, Nome</Text>
			<Text>Como você está se sentindo hoje?</Text>
		</View>
	);
}
