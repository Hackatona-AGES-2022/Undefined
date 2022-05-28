import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Header from "../components/Header";
import { routes } from "./routes";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const Stack = createNativeStackNavigator();

export default function Router() {
	return (
		<Stack.Navigator
			// home no segundo login linha abaixo
			initialRouteName={routes.defaultPath}
			screenOptions={{
				headerShadowVisible: false,
			}}
		>
			{routes.routes.map((route) => (
				<Stack.Screen
					key={route.name}
					name={route.name}
					component={() => (
						<Container>
							<Header />
							<route.component />
						</Container>
					)}
					options={route.options}
				/>
			))}
		</Stack.Navigator>
	);
}
const Container = styled.View`
	flex: 1;
	padding: ${getStatusBarHeight(true) || 20}px 20px;
`;
