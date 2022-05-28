import styled from "styled-components/native";
import Card from "./Card";
export default function MoodCard({ Icon, text }) {
	return (
		<Container>
			<Card>
				<ContentWrapper>
					<Icon height={30} width={30} stroke="#fff" strokeWidth="2" />
					<IconText>{text}</IconText>
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
	color: #fff;
	font-size: 14px;
	font-weight: 600;
	margin-top: 15px;
`;
