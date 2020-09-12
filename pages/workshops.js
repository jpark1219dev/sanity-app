import React from "react";
import { BaseLayout, BaseContainer, BaseGrid, Panel, NavHeader } from "../components/layouts";

const Workshops = () => {
	return (
		<BaseLayout mainClass="home">
			<BaseContainer>
				<NavHeader />
					<div className="heading-primary--main">Workshops!</div>
			</BaseContainer>
		</BaseLayout>
	)	
}

export default Workshops;