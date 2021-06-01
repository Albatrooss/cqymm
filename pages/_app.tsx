import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components"
import theme from "../theme";
import GlobalStyle from '../theme/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>    
    ) 
}

export default MyApp
