import Head from "next/head";

import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Modelo de satisfacción</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
