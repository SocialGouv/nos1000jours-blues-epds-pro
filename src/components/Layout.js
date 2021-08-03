import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";

import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout({ children }) {
  return (
    <React.Fragment>
      <Head>
        <title>1000 premiers jours</title>
      </Head>

      <Nav />
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  );
}
