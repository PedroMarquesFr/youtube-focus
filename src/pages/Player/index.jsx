import React, { useState, memo } from "react";
import Recommends from "../../components/Recommends";
import { Container, BlackContainer } from "./style";

import ReactPlayer from "react-player";

import { useParams } from "react-router-dom";

function Player() {
  let { id } = useParams();
  const [winSize, setWinSize] = useState(document.documentElement.clientWidth);
  const updateSize = () => {
    setWinSize(document.documentElement.clientWidth);
  };
  window.addEventListener("resize", updateSize);
  return (
    <Container>
      <BlackContainer>
        <ReactPlayer
          height={`${winSize / 2.3}px`}
          width={`${(winSize / 2.3) * 1.777777777778}px`}
          controls
          playing="true"
          url={`https://www.youtube.com/watch?v=${id}`}
        />
      </BlackContainer>
      <Recommends id={id} />
    </Container>
  );
}

export default memo(Player);
