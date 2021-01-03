import React from "react";
import { Container } from "./style";
import { connect } from "react-redux";
import VideoWrapper from "../../components/VideoWrapper";
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
      <VideoWrapper videos={videos} />
      <button onClick={() => handleAsyncSearch(lastSearchTerm, nextPageToken)}>
        More Videos
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
