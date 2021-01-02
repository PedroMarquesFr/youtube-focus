import React,{useState, memo} from "react";
import Recommends from '../../components/Recommends';
import { Container } from "./style";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";

 function Player() {
  let { id } = useParams();
  const [winSize, setWinSize] = useState(document.documentElement.clientWidth);
  const updateSize = ()=>{
    setWinSize(document.documentElement.clientWidth);
  }
  window.addEventListener('resize', updateSize);


  const opts = {
    height: winSize / 2.3, //720
    width: (winSize / 2.3) * 1.777777777778, //1280
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      modestbranding: 1,
      rel:0,
    },
  };
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };
  return (
    <Container>
      <YouTube videoId={id} opts={opts} onReady={_onReady} />
      <Recommends id={id}/>
    </Container>
  );
}

export default memo(Player);    