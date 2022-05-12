import DefaultLayout from "../components/DefaultLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
