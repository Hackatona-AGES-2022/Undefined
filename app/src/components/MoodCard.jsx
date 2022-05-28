import styled from "styled-components/native";
import Card from "./Card";
import config from "../config";
export default function MoodCard({ Icon, text, active }) {
	return (
		<Container>
			<Card active={active} mood>
				<ContentWrapper>
					<Icon
						height={30}
						width={30}
						stroke={!active ? config.colors.primary : "#fff"}
						strokeWidth="2"
					/>
					<IconText active={!active}>{text}</IconText>
				</ContentWrapper>
			</Card>
		</Container>
	);
}
const Container = styled.View`
	width: 70px;
	height: 100px;
`;
const ContentWrapper = styled.View`
	justify-content: center;
	align-items: center;
	height: 100%;
`;
const IconText = styled.Text`
	color: ${(props) => (props.active ? config.colors.primary : "#fff")};
	font-size: 14px;
	font-weight: 600;
	margin-top: 15px;
`;
