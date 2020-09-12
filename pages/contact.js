import React from "react";
import { BaseLayout, BaseContainer, BaseGrid, Panel, NavHeader } from "../components/layouts";

const Contact = () => {
	return (
		<BaseLayout mainClass="home">
			<BaseContainer>
				<NavHeader />
					<div className="heading-primary--main">Contact!</div>
			</BaseContainer>
		</BaseLayout>
	)	
}

export default Contact;