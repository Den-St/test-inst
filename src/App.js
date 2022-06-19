import {ThemeProvider} from "styled-components";
import {Layout} from "./components/Layout";
import {Normalize} from "styled-normalize";


function App() {
  return <>
    <ThemeProvider theme={{}}>
      <Layout/>
    </ThemeProvider>
    <Normalize/>
  </>
}

export default App;
