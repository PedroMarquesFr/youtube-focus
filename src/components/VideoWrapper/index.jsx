import React from "react";
import Video from '../Video';
import { Container } from "./style";

export default function VideoWrapper({ videos }) {
  return (
    <Container>
      {videos.map(
        ({
          id: { videoId },
          snippet: {
            title,
            description,
            thumbnails: {
              medium: { url },
            },
            channelTitle,
          },
        }) => (
          <Video
            data={{ thumb: url, title, description, channelTitle, videoId }}
          />
        )
      )}
    </Container>
  );
}
