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

export const Rating = styled.View`
padding-top: 10px;
align-items: center;
justify-content: center;
flex-direction: row;
`;

export const SearchContainer = styled.View`
margin: 15px;
justify-content: center;
align-items: center;
`

