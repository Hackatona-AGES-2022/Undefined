import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Router from "./src/router";

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar
				backgroundColor="transparent"
				translucent
				barStyle="dark-content"
			/>
			<Router />
		</NavigationContainer>
	);
}
