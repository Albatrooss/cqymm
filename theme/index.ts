import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            primary: string;
            secondary: string;

            red: {
                dark: string;
                gray: string;
                pink: string;
                light: string;
                main: string;
            }

            white: string;
            black: string;

            error: string;

        }
    }
}

const theme: DefaultTheme = {
    color: {
        primary: '#D45266',
        secondary: '#4040D4',

        red: {
            dark: '#7F001B',
            gray: '#7F2639',
            pink: '#FF4C72',
            light: '#FF0036',
            main: '#CC002B',
        },

        white: '#F2F2F2',
        black: '#333333',

        error: '#ED4337',

    }
}

export default theme;