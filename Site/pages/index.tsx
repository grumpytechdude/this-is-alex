import { Heading } from "grommet";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <title>Alex Sinclair</title>
        <meta
          name="Description"
          content="Alex Sinclair's personal website and homepage. Author: Alex Sinclair"
        />
      </Head>
      <Heading level="1">Welcome!</Heading>
    </>
  );
}

export default Index;
