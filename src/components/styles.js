import styled from 'styled-components/native';
import {Card, Title, Paragraph, Caption} from 'react-native-paper';

export const MoviesContainer = styled.SafeAreaView`
flex: 1;
background-color: #06304b;
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
font-family: Lato_400Regular;
`;

export const MovieTitleDetail = styled(Title)`
text-align: center;
padding-top: 10px;
font-size: 24px;
font-family: Lato_400Regular;
`;

export const Synopsis = styled(Paragraph)`
padding-top: 10px;
padding-bottom: 10px;
text-align: center;
font-family: Lato_400Regular;
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
`;

export const ErrorCard = styled(Card)`
margin: 15px;
padding: 10px;
justify-content: center;
`;

export const RatingsContainer = styled.View`
padding-top: 10px;
align-items: center;
justify-content: center;
`;

export const ButtonContainer = styled.View`
padding: 15px;
align-items: flex-start;
justify-content: center;
`

export const DetailCard = styled(Card)`
margin-left: 15px;
margin-right: 15px;
margin-top: 5px;
padding: 10px;
justify-content: center;
`;

export const Cast = styled(Caption)`
text-align: center;
`

