import type { AppProps } from "next/app";
import store from "store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";

interface CustomAppProps extends Omit<AppProps, "Component"> {
  Component: AppProps["Component"] & { Layout: JSX.Element };
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
