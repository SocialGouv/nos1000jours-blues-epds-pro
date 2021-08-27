import React from "react";
import Head from "next/head";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from 'next-i18next';

import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout({ children }) {
  const { t } = useTranslation('common');

  return (
    <React.Fragment>
      <Head>
        <title>{t('header-name')}</title>
      </Head>

      <Nav />
      <Container >{children}</Container>
      <Footer />

    </React.Fragment>
  );
}

export function ContentLayout({ title, children }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Row style={{ minHeight: "80vh", alignContent: "start" }}>
        {children}
      </Row>
    </Layout>
  );
}
