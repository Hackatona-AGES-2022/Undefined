import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SubTitle, Title } from "../styles";
import styled from "styled-components/native";
import config from "../config";
import { PlusCircle } from "react-native-feather";
import DiaryCard from "../components/DiaryCard";
import { AsyncStorage } from "react-native";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";

export default function Diary({ navigation, route }) {
	const isFocused = useIsFocused();

	const [diary, setDiary] = useState([]);
	useEffect(() => {
		AsyncStorage.getItem("diary").then((value) => {
			const data = JSON.parse(value);
			setDiary(data);
		});
	}, [isFocused]);

	return (
		<Container>
			<TitleWrapper>
				<View>
					<Title>Diário da Gratidão</Title>
					<SubTitle>Veja como você tem evoluido!</SubTitle>
				</View>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("home.add-diary");
					}}
				>
					<PlusCircle size={50} color={config.colors.primary} />
				</TouchableOpacity>
			</TitleWrapper>
			{diary?.length ? (
				diary.map((item) => {
					return (
						<TouchableOpacity
							key={item.id}
							onPress={() => {
								navigation.navigate("home.add-diary", { id: item.id });
							}}
						>
							<DiaryCard
								key={item.id}
								date={new Date(item?.createdAt)}
								title={item?.title}
								subtitle={item?.content}
							/>
						</TouchableOpacity>
					);
				})
			) : (
				<Text>Ainda não há nada por aqui</Text>
			)}
		</Container>
	);
}

const Container = styled.View``;
const TitleWrapper = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 30px;
`;
