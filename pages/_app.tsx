import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from "@material-ui/core";
import theme from "../src/theme";
import { StateProvider } from "../client/store/store";


const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
         <StateProvider>
            <Component {...pageProps} />
          </StateProvider>
        </CssBaseline>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;


