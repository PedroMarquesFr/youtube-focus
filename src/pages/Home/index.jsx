import React from "react";
import { Container, Button, LogoSvg, Ornament, Span } from "./style";
import Logo from "../../styles/images/YTF-Long-logo.svg";
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
  if (!isFetching && videos.length === 0) {
    return (
      <Container>
        <LogoSvg src={Logo} />
        <Ornament />
        <Span>Recommendations only related to the main content</Span>
        <Span>No distractions.</Span>
      </Container>
    );
  }
  if (isFetching && videos.length === 0) {
    return <span>Loading...</span>;
  }
  if (error) {
    return <span>Error: {error}</span>;
  }
  return (
    <Container>
      <VideoWrapper videos={videos} />
      <Button onClick={() => handleAsyncSearch(lastSearchTerm, nextPageToken)}>
        More Videos
      </Button>
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
