import Documnet, { Html, Head, Main, NextScript } from "next/document";

class CustomeDocument extends Documnet {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://kit.fontawesome.com/8554fb7338.js"
            crossOrigin="anonymous"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomeDocument;

// This document is used to make customizations to the base document provided by Next. the goal is to add important scripts and tags that are unique and need by the app and pages in it. what is added here will be available through all pages in the app. for example if an analytical script is needed, it will be injected like this
