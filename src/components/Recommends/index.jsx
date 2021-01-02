import React, { useEffect } from "react";
import { Container } from "./style";

import { connect } from "react-redux";
import handleAsyncNewPage from "../../store/ducks/RecomenRequest/actions";

function Recommends({
  id,
  handleAsyncNewPage,
  videos,
  isFetching,
  nextPageToken,
  lastId,
  error,
}) {
  const handleFetchPage = () => {
    return id === lastId ? false : handleAsyncNewPage(id, nextPageToken);
  };
  useEffect(() => {
    console.log("montou");
    handleFetchPage();
  }, []);

  return <Container>Recommends {id}</Container>;
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
