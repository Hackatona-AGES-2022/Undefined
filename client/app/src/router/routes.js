import Configurations from "../views/Configurations";
import Home from "../views/Home";
import Panic from "../views/Panic";

export const routes = {
	defaultPath: "home",
	routes: [
		{
			name: "home",
			component: Home,
			options: { headerShown: false, animation: "none" },
		},
		{
			name: "panic",
			component: Panic,
			options: { headerShown: false, animation: "none" },
		},
		{
			name: "configurations",
			component: Configurations,
			options: { headerShown: false, animation: "none" },
		},
	],
};
