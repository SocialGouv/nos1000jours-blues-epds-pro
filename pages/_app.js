import "bootstrap/dist/css/bootstrap.css"
import "../src/bootstrap-theme.scss"
import "../src/main.scss"

import App from "next/app"
import Head from "next/head"
import { appWithTranslation } from "next-i18next"
import React from "react"
import { ThemeProvider } from "styled-components"
import { init } from "@socialgouv/matomo-next"

const theme = {
  colors: {},
  font: "Marianne",
}

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID
const MATOMO_ENABLED = process.env.NEXT_PUBLIC_MATOMO_ENABLED

class MyApp extends App {
  componentDidMount() {
    if (MATOMO_ENABLED === "true")
      init({ siteId: MATOMO_SITE_ID, url: MATOMO_URL })
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=yes"
          />
          <meta name="description" content="TODO" />
          <meta name="author" content="" />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default appWithTranslation(MyApp)
