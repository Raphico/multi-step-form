import GlobalStyle from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Card from "./components/styles/Card.styled";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";

const theme = {
  colors: {
    primary: {
      marineBlue: 'hsl(213, 96%, 18%)',
      purplishBlue: 'hsl(243, 100%, 62%)',
      pastelBlue: 'hsl(228, 100%, 84%)',
      lightBlue: 'hsl(206, 94%, 87%)',
      strawberryRed: 'hsl(354, 84%, 57%)'
    },
    neutral: {
      coolGray: 'hsl(231, 11%, 63%)',
      lightGray: 'hsl(229, 24%, 87%)',
      magnolia: 'hsl(217, 100%, 97%)',
      alabaster: 'hsl(231, 100%, 99%)',
      white: 'hsl(0, 0%, 100%)'
    }
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Card>
        <Sidebar />
        <Form />
      </Card>
    </ThemeProvider>
  )
}

export default App;
