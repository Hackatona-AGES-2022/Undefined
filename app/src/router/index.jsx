import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Header from "../components/Header";
import { routes } from "./routes";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Footer from "../components/Footer";

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
					options={route.options}
				>
					{(props) => (
						<Container>
							<Header back={route.hasParent} {...props} />
							<ScrollView>
								<route.component {...props} />
							</ScrollView>
							<Footer active={route.name} {...props} />
						</Container>
					)}
				</Stack.Screen>
			))}
		</Stack.Navigator>
	);
}
const Container = styled.View`
	flex: 1;
	padding: ${getStatusBarHeight(true) || 20}px 20px;
	overflow: scroll;
`;
const ScrollView = styled.ScrollView`
	margin-bottom: 50px;
`;
