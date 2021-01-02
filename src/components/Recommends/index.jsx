import React, { useEffect } from "react";
import { Container } from "./style";

import { connect } from "react-redux";
import handleAsyncNewPage from "../../store/ducks/RecomenRequest/actions";
import VideoWrapper from "../VideoWrapper";

function Recommends({
  id,
  handleAsyncNewPage,
  videos,
  isFetching,
  lastId,
  error,
}) {
  const handleFetchPage = () => {
    return handleAsyncNewPage(id);
  };
  useEffect(() => {
    console.log(id,lastId)
    if(id!==lastId){
        handleFetchPage(); 
    }
    
  }, [id]);

  if (error) {
    return <span>Error: {error}</span>;
  }
  if (isFetching && videos.length === 0) {
    return <span>Loading...</span>;
  }
  return (
    <Container>
      Recommends for {id}
      <VideoWrapper videos={videos} />
    </Container>
  );
}

const mapDispatchToProps = { handleAsyncNewPage };

const mapStateToProps = ({
  RecomenRequest: { videos, error, isFetching, nextPageToken, lastId },
}) => ({
  videos,
  error,
  isFetching,
  nextPageToken,
  lastId,
});

export default connect(mapStateToProps, mapDispatchToProps)(Recommends);
