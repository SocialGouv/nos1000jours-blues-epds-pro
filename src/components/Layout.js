import Head from "next/head"
import { useTranslation } from "next-i18next"
import React from "react"
import { Container, Row } from "react-bootstrap"

import { Footer } from "./Footer"
import { Nav } from "./Nav"

export function Layout({ children }) {
  const { t } = useTranslation("common")

  return (
    <React.Fragment>
      <Head>
        <title>{t("header-name")}</title>
      </Head>

      <Nav />
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  )
}

export function ContentLayout({ title, children }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Row style={{ alignContent: "start", minHeight: "80vh" }}>{children}</Row>
    </Layout>
  )
}
