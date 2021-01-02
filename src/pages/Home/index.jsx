import React from "react";
import { Container } from "./style";
import { connect } from "react-redux";
import Video from "../../components/Video";
import handleAsyncSearch from "../../store/ducks/SearchRequest/actions";

function Home({
  videos,
  error,
  isFetching,
  handleAsyncSearch,
  lastSearchTerm,
  nextPageToken,
}) {
  if (isFetching && videos.length === 0) {
    return <span>Loading...</span>;
  }
  if (error) {
    return <span>Error: {error}</span>;
  }
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
      <button onClick={() => handleAsyncSearch(lastSearchTerm, nextPageToken)}>
        Add Search
      </button>
      {isFetching && <span>Loading...</span>}
    </Container>
  );
}

const mapStateToProps = ({
  SearchRequest: { videos, error, isFetching, lastSearchTerm, nextPageToken },
}) => ({
  videos,
  error,
  isFetching,
  lastSearchTerm,
  nextPageToken,
});
const mapDispatchToProps = { handleAsyncSearch };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
