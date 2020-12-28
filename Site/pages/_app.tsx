import { Grommet } from "grommet";
import Layout from "../components/Layout";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <Grommet full theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Grommet>
  );
}

export default MyApp;
