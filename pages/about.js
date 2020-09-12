import React from "react";
import { BaseLayout, BaseContainer } from "../components/layouts";
import NavHeader from "../components/layouts/NavHeader";

const About = () => {
	return (
		<BaseLayout mainClass="home">
			<BaseContainer>
				<NavHeader />
					<div className="heading-primary--main">About!</div>
			</BaseContainer>
		</BaseLayout>
	)
}

export default About;