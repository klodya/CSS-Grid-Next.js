import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="stylesheet" href="../static/fonts/archistico_normal_macroman/stylesheet.css" type="text/css" charset="utf-8" />
          <link rel="icon" href="/static/images/pencil.png"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </html>
    )
  }
}
