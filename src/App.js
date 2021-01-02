import GlobalStyles from "./styles/global";
import {useState} from "react";
import Routes from "./routes";

import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {
  const [theme, setTheme] = useState(light);
  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };
  return (
    <div>
      <ThemeProvider theme={{ ...theme, toggleTheme }}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </div>
  );
}
// MyIJTSlTThU
export default App;
