import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "@/theme/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, //If a user leaves your application and returns and the query data is old, TanStack Query automatically requests fresh data for you in the background. i disabled it using refetchOnWindowFocus!
    },
  },
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        {getLayout(
          <>
            <Head>
              <title>Pawfect</title>
              <link rel="icon" href="/logo.svg" />
            </Head>
            <ToastContainer />
            <Component {...pageProps} />
          </>
        )}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
