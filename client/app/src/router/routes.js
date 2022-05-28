import AddDiary from "../views/AddDiary";
import Configurations from "../views/Configurations";
import Diary from "../views/Diary";
import Home from "../views/Home";
import Panic from "../views/Panic";
import Reasons from "../views/Reasons";

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
		{
			name: "home.diary",
			component: Diary,
			options: { headerShown: false },
			hasParent: true,
		},
		{
			name: "home.03-reasons",
			component: Reasons,
			options: { headerShown: false },
			hasParent: true,
		},
		{
			name: "home.add-diary",
			component: AddDiary,
			options: { headerShown: false },
			hasParent: true,
		},
	],
};
