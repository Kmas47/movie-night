import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from "@material-ui/core";
import theme from "../src/theme";
import { Context } from "../client/store/context";
import { StateProvider } from "../client/store/store";


 
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {

  const [value, setValue] = useState([]);

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


