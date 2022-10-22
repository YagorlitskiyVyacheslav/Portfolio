import type { AppProps } from "next/app";
import store from "store";
import { Provider } from "react-redux";
import { ThemeAppProvider } from "@/styles/ThemeProvider";
import { GlobalStyle } from "@/styles/globalStyles";

interface CustomAppProps extends Omit<AppProps, "Component"> {
  Component: AppProps["Component"] & { Layout: JSX.Element };
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <Provider store={store}>
      <ThemeAppProvider theme="light">
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeAppProvider>
    </Provider>
  );
}

export default MyApp;
