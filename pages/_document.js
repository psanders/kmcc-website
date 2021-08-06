import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&family=Source+Sans+Pro:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KN5HH9B7RN"
        />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-KN5HH9B7RN');
              `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
