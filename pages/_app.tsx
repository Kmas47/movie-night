import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import CssBaseline from '@material-ui/core/CssBaseline';

 
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return(
    <QueryClientProvider client={queryClient}>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </QueryClientProvider>
  );
}

export default MyApp
