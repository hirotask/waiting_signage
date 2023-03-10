import '../styles/globals.css'
import { ThemeProvider } from '@mui/material';
import theme from "../components/theme";


export default function App({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
      </ThemeProvider>
  );
}
