import React from "react";
import {
  Container,
  Thumb,
  InfoWrapper,
  Title,
  // Description,
  Channel,
} from "./style";

export default function Video({
  data: { thumb, title, description, channelTitle },
}) {
  return (
    <Container>
      <Thumb src={thumb} alt="thumb" />
      <InfoWrapper>
        <Title>{title}</Title>
        <Channel>{channelTitle}</Channel>
      </InfoWrapper>
    </Container>
  );
}
