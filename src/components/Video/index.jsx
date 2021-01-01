import React from "react";
import {
  Container,
  Thumb,
  InfoWrapper,
  Title,
  // Description,
  Channel,
  PlayerLink
} from "./style";

export default function Video({
  data: { thumb, title, description, channelTitle, videoId },
}) {
  return (
    <Container>
      <PlayerLink to={`/player/${videoId}`}>
        <Thumb src={thumb} alt="thumb" />
        <InfoWrapper>
          <Title>{title}</Title>
          <Channel>{channelTitle}</Channel>
        </InfoWrapper>
      </PlayerLink>
    </Container>
  );
}
