import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const GenreContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #06304b;
`;

export const GenreCard = styled(Card)`
border-radius: 20px;
  margin-left: 10px;
  margin-right:10px;
  margin-top: 15px;
  padding: 15px;
  align-items: center;
  justify-content: center;
  background-color: rgba(246, 239, 243, 0.8)
`;

export const GenreTitle = styled.Text`
text-align: center;
font-size: 45px;
font-family: KaushanScript_400Regular;
`;



