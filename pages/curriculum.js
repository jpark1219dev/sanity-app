import React from "react";
import { BaseLayout, BaseContainer, BaseGrid, Panel, NavHeader } from "../components/layouts";

const Curriculum = () => {
	return (
		<BaseLayout mainClass="home">
			<BaseContainer>
				<NavHeader />
					<div className="heading-primary--main">Curriculum!</div>
			</BaseContainer>
		</BaseLayout>
	)	
}

export default Curriculum;