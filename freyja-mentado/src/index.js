import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './pages/homePage/Root';
import FooterComp from './pages/footer/FooterComp';
import reportWebVitals from './reportWebVitals';

import '@fontsource/noto-serif'; // Defaults to 400 weight
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    palette: {
        background: {
            default: '#001a00', // Dark greenish-black background
        },
        text: {
            primary: '#00ff00', // Bright green text
        },
    },
    typography: {
        fontFamily: 'Courier New, monospace', // Monospaced terminal font
        allVariants: {
            color: '#00ff00', // Green text
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<React.StrictMode >
			<Root />
			<FooterComp />
		</React.StrictMode>
	</ThemeProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
