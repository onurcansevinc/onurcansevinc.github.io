import Head from "next/head";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Personal Website</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
