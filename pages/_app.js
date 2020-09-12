import React from "react";
import App from "next"
import "../styles/main.scss";

const MyApp = ({ Component, pageProps }) => {
	return <Component {...pageProps} />
}

MyApp.getInitialProps = async ({Component, router, ctx}) => {
	let pageProps = {};
	if(Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}
	return { pageProps };
}

export default MyApp;