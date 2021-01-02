import React, { useState } from "react";
import { Container, Input, SearchButton, InputWrapper } from "./style";
import shoe1 from "../../styles/images/YTF-Short-logo.svg";
import { Link, Route } from "react-router-dom";

import { connect } from "react-redux";
import handleAsyncSearch from "../../store/ducks/SearchRequest/actions";

function Header({ handleAsyncSearch }) {
  const [key, setKey] = useState("");
  return (
    <Container>
      <Link to="/">
        <img src={shoe1} alt="logo" width="130"/>
      </Link>

      <Route
        render={({ history }) => (
          <InputWrapper>
            <Input onChange={(e) => setKey(e.target.value)}></Input>
            <SearchButton
              type="button"
              onClick={() => {
                history.push("/");
                handleAsyncSearch(key);
              }}
            >
              Search
            </SearchButton>
          </InputWrapper>
        )}
      />
    </Container>
  );
}

const mapDispatchToProps = { handleAsyncSearch };
export default connect(null, mapDispatchToProps)(Header);
