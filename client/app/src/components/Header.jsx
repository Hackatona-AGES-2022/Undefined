import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import config from "../config";
import Icon from "../../assets/icon.js";
import { ChevronLeft, Bell } from "react-native-feather";
import { TouchableOpacity } from "react-native";

export default function Header({ back, navigation: { goBack } }) {
	return (
		<Container>
			<IconWrapper>
				{back && (
					<TouchableOpacity
						onPress={() => {
							goBack();
						}}
					>
						<ChevronLeft
							width={30}
							height={30}
							stroke={config.colors.primary}
							strokeWidth="2"
						/>
					</TouchableOpacity>
				)}
			</IconWrapper>
			<LogoWrapper>
				<SvgXml xml={Icon} width="42.13px" height="33.42px" />
				<LogoText>{config.name}</LogoText>
			</LogoWrapper>
			<IconWrapper>
				<TouchableOpacity onPress={() => {}}>
					<Bell stroke={config.colors.primary} strokeWidth="2" />
				</TouchableOpacity>
			</IconWrapper>
		</Container>
	);
}

const Container = styled.View`
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
	max-height: 70px;
	margin-bottom: 40px;
`;

const IconWrapper = styled.View`
	width: 28px;
	justify-content: space-between;
	align-items: center;
`;

const LogoWrapper = styled.View`
	align-items: center;
`;
const LogoText = styled.Text`
	font-size: 24px;
	font-weight: bold;
	color: ${config.colors.primary};
	margin-top: 6px;
`;
