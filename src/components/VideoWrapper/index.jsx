import React, { memo } from "react";
import Video from "../Video";
import { Container } from "./style";

function VideoWrapper({ videos }) {
  const filteredVideos = videos.filter(video=>video.snippet !== undefined)
  return (
    <Container>
      {filteredVideos.map(
        ({
          id: { videoId },
          snippet: {
            title=null,
            description,
            thumbnails: {
              medium: { url },
            },
            channelTitle,
          },
        }) => {
          if (title === null) {
            return null;
          }
          return (
            <Video
              data={{ thumb: url, title, description, channelTitle, videoId }}
            />
          );
        }
      )}
    </Container>
  );
}


export default memo(VideoWrapper);