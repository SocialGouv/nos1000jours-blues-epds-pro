import "bootstrap/dist/css/bootstrap.css"
import "../src/bootstrap-theme.scss"
import "../src/main.scss"

import App from "next/app"
import Head from "next/head"
import { appWithTranslation } from "next-i18next"
import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {},
  font: "Marianne",
}

class MyApp extends App {
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
