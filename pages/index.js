import React from "react";
import { BaseLayout, BaseContainer, NavHeader } from "../components/layouts";

const Index = () => {
	return (
		<BaseLayout mainClass="home">
			<BaseContainer>
				<NavHeader />
					<div className="heading-primary--main">Hello World!</div>
			</BaseContainer>
		</BaseLayout>
	)
}

export default Index;

export async function getStaticProps({preview = false}) {
	return {
		props: {
			preview
		},
		revalidate: 1
	}
}