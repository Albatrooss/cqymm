import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components"
import theme from "../theme";
import GlobalStyle from '../theme/GlobalStyle';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@1&family=Lato:wght@400;700&display=swap" rel="stylesheet"></link>
            </Head>
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>    
    ) 
}

export default MyApp
