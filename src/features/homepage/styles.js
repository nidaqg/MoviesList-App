import styled from 'styled-components/native';
import {Card, Title, Paragraph} from 'react-native-paper';

export const MoviesContainer = styled.SafeAreaView`
flex: 1;
background-color: white;
`;

export const MovieCard = styled(Card)`
margin: 15px;
padding: 10px;
justify-content: center;
`;

export const MovieTitle = styled(Title)`
text-align: center;
padding-bottom: 10px;
font-size: 24px;
`

export const Synopsis = styled(Paragraph)`
padding-top: 10px;
padding-bottom: 10px;
text-align: center;
`;

export const Rating = styled.Text`
padding-top: 10px;
text-align: center;
`;

export const SearchContainer = styled.View`
margin-left: 15px;
margin-right: 15px;
justify-content: center;
align-items: center;
`

