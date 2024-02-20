import './App.css';
import Home from './Pages/Home/Home'
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from 'styled-components';
function App() {

  const theme ={
    media: { mobile: "375px"},
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Home/>
    </ThemeProvider>
    
  );
}

export default App;
