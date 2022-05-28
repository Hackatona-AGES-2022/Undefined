import Home from "../views/Home";

export const routes = {
	defaultPath: "home",
	routes: [
		{
			name: "home",
			component: Home,
			options: { headerShown: false },
		},
	],
};
