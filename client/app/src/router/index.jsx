import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "./routes";

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
					component={route.component}
					options={route.options}
				/>
			))}
		</Stack.Navigator>
	);
}
