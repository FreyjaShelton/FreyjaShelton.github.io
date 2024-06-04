import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './pages/homePage/Root';
import ErrorPage from "./pages/errorPage/ErrorPage";
import Portfolio from './pages/portfolio/Portfolio';
import Source from './pages/source/Source';
import Types from './pages/test/Types';
import ResponsiveAppBar from './pages/navBar/NavBar';
import reportWebVitals from './reportWebVitals';
import {
	createHashRouter,
	RouterProvider,
} from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const router = createHashRouter([
	{
		path: "/",
		element: <ResponsiveAppBar />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Root />,
			},
			{
				path: "portfolio",
				element: <Portfolio />,
				errorElement: <ErrorPage />,
			},
			{
				path: "source",
				element: <Source />,
				errorElement: <ErrorPage />,
			},
			{
				path: "types",
				element: <Types />,
				errorElement: <ErrorPage />,
			},
		],
	},

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
