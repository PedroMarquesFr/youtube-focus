import React, { useState } from "react";
import { Container } from "./style";

import { connect } from "react-redux";
import handleAsyncSearch from "../../store/ducks/SearchRequest/actions";

function Header({ handleAsyncSearch, nextPageToken }) {
  const [key, setKey] = useState("");
  const [lastSearch, setLastSearch] = useState("");
  return (
    <Container>
      <input onChange={(e) => setKey(e.target.value)}></input>
      <button
        onClick={() => {
          handleAsyncSearch(key);
          setLastSearch(key);
        }}
      >
        Search
      </button>
      <button onClick={() => handleAsyncSearch(lastSearch, nextPageToken)}>
        Add Search
      </button>
    </Container>    
  );
}

const mapStateToProps = ({ SearchRequest: { nextPageToken } }) => ({
  nextPageToken,
});
const mapDispatchToProps = { handleAsyncSearch };
export default connect(mapStateToProps, mapDispatchToProps)(Header);
