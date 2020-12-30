import "./App.css";
import YouTube from "react-youtube";
import {useState, useEffect} from "react";

function App() {
  const [req, setReq] = useState({items:[]})
  const [load, setLoad] = useState(false);
  useEffect(() => {
    handleAPI()
  }, [])
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };
  const handleAPI = async () => {
    try {
      const req = await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=id&maxResults=10&relatedToVideoId=MyIJTSlTThU&type=video&key=AIzaSyAgWs_nQDFLyyVnRZUbbmBVb7lT_u8gyCw"
      );
      const json = await req.json();
      console.log(json);
      setReq(json.items);
      setLoad(true);
    } catch (error) {
      console.log(
        `(From async/await getProductsFromCategoryAndQuery) Error: ${error.error}`
      );
    }
  };
  return (
    <div className="App">
      Hello YouTube focus!
      <YouTube videoId="1EfkVEBvB40" opts={opts} onReady={_onReady} />
      {load? req.map(vid=><p>{vid.id.videoId}</p>):<span>loading</span>}
    </div>
  );
}
// MyIJTSlTThU
export default App;
