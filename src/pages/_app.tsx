import { ChakraProvider, Menu } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import { NavBarMenu } from "../components/NavBarMenu";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;

