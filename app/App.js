import { NavigationContainer } from "@react-navigation/native";

import Router from "./src/router";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform, StatusBar } from "react-native";
import notification from "./src/config/notifications.json";

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});

export default function App() {
	const [expoPushToken, setExpoPushToken] = useState("");
	const [notification, setNotification] = useState(false);
	const notificationListener = useRef();
	const responseListener = useRef();

	useEffect(() => {
		registerForPushNotificationsAsync().then((token) => {
			setExpoPushToken(token);
			schedulePushNotification();
		});

		notificationListener.current =
			Notifications.addNotificationReceivedListener((notification) => {
				setNotification(notification);
			});

		responseListener.current =
			Notifications.addNotificationResponseReceivedListener((response) => {
				console.log(response);
			});

		return () => {
			Notifications.removeNotificationSubscription(
				notificationListener.current
			);
			Notifications.removeNotificationSubscription(responseListener.current);
		};
	}, []);

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

async function schedulePushNotification() {
	const rand = Math.floor(Math.random() * notification.length);
	const selected = notification[rand];
	await Notifications.scheduleNotificationAsync({
		content: {
			title: selected.title,
			body: selected.body,
			data: selected.data,
		},
		trigger: {
			seconds: 5,
		},
	});
	await Notifications.scheduleNotificationAsync({
		content: {
			title: selected.title,
			body: selected.body,
			data: selected.data,
		},
		trigger: {
			hour: 10,
			minute: 10,
			repeats: true,
		},
	});
	await Notifications.scheduleNotificationAsync({
		content: {
			title: selected.title,
			body: selected.body,
			data: selected.data,
		},
		trigger: {
			hour: 20,
			minute: 20,
			repeats: true,
		},
	});
}

async function registerForPushNotificationsAsync() {
	let token;
	if (Device.isDevice) {
		const { status: existingStatus } =
			await Notifications.getPermissionsAsync();
		let finalStatus = existingStatus;
		if (existingStatus !== "granted") {
			const { status } = await Notifications.requestPermissionsAsync();
			finalStatus = status;
		}
		if (finalStatus !== "granted") {
			alert("Failed to get push token for push notification!");
			return;
		}
		token = (await Notifications.getExpoPushTokenAsync()).data;
		console.log(token);
	} else {
		alert("Must use physical device for Push Notifications");
	}

	if (Platform.OS === "android") {
		Notifications.setNotificationChannelAsync("default", {
			name: "default",
			importance: Notifications.AndroidImportance.MAX,
			vibrationPattern: [0, 250, 250, 250],
			lightColor: "#FF231F7C",
		});
	}

	return token;
}
