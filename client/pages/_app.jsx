import "@style/fonts.scss";
import "@style/main.scss";
import "@style/scrollbar.scss";
import "@style/reset.scss";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  );
}

export default MyApp;
