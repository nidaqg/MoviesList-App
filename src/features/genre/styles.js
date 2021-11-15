import styled from "styled-components/native";
import { Card, Title } from "react-native-paper";

export const GenreContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #06304b;
`;

export const GenreCard = styled(Card)`
  margin-left: 10px;
  margin-right:10px;
  margin-top: 15px;
  border-radius: 20px;
  padding: 30px;
  align-items: center;
  justify-content: center;

`;

export const GenreTitle = styled(Title)`
text-align: center;
padding-bottom: 10px;
font-size: 24px;
font-family: Lato_400Regular;
`;


