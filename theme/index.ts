import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            primary: string;
            secondary: string;

            white: string;
            black: string;

        }
    }
}

const theme: DefaultTheme = {
    color: {
        primary: '#4040D4',
        secondary: '#4040D4',

        white: '#F2F2F2',
        black: '#333333',

    }
}

export default theme;