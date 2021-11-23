import React from 'react';
import {SettingsContainer, Header, Info} from '../styles';
import { Avatar, List } from 'react-native-paper';
import { Image } from 'react-native';

export const SettingsPage = () => {
    return(
        <>
        <SettingsContainer>
        <Header>
        <Avatar.Image 
        size={150} 
        source={require("../../../../assets/logo.png")} 
        />
        </Header>
        

        
            <List.Item
            title="Thank you for choosing MovieLog!"
            left={props => <List.Icon {...props} icon="star" />}
            />
            <List.Item
            title="Powered by the TMDB API"
            description="This product uses the TMDB API but is not endorsed or certified by TMDB."
            left={props => <List.Icon {...props} icon="star" />}
            />
            <Info>
            <Image 
            style={{width:150, height: 100}}
            source={require('../../../../assets/the-movie-database-logo.png')} />
        </Info>
        
        </SettingsContainer>
        </>
    )
}