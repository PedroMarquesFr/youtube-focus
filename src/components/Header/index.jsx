import React, { useState } from "react";
import { Container } from "./style";
import { Link, Route } from "react-router-dom";

import { connect } from "react-redux";
import handleAsyncSearch from "../../store/ducks/SearchRequest/actions";

function Header({ handleAsyncSearch }) {
  const [key, setKey] = useState("");
  return (
    <Container>
      <Link to="/">Home</Link>
      <input onChange={(e) => setKey(e.target.value)}></input>

      <Route
        render={({ history }) => (
          <button
            type="button"
            onClick={() => {
              history.push("/");
              handleAsyncSearch(key);
            }}
          >
            Search
          </button>
        )}
      />
    </Container>
  );
}

const mapDispatchToProps = { handleAsyncSearch };
export default connect(null, mapDispatchToProps)(Header);
