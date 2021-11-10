import React from "react";
import { MovieCard } from "./styles";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export const MovieCardInfo = (props) => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <>
      <MovieCard elevation={5}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </MovieCard>
    </>
  );
};
