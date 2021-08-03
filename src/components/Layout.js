import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
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
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  );
}
