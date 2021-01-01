import React from "react";
import { Container } from "./style";
import { connect } from "react-redux";
import Video from "../../components/Video";

function Home({ videos, error, isFetching }) {
  if (error) {
    return <span>Error: {error}</span>;
  }
  if (isFetching && videos.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <Container>
      {videos.map(
        ({
          snippet: {
            title,
            description,
            thumbnails: {
              medium: { url },
            },
            channelTitle,
          },
        }) => (
          <Video data={{ thumb: url, title, description, channelTitle }} />
        )
      )}
      {isFetching && <span>Loading...</span>}
    </Container>
  );
}

const mapStateToProps = ({ SearchRequest: { videos, error, isFetching } }) => ({
  videos,
  error,
  isFetching,
});

export default connect(mapStateToProps)(Home);
