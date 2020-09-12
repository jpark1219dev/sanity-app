import React from "react";
import { BaseLayout, BaseContainer, BaseGrid, Panel, NavHeader } from "../components/layouts";

const Blogs = () => {
	return (
		<BaseLayout mainClass="home">
			<BaseContainer>
				<NavHeader />
					<div className="heading-primary--main">Blogs!</div>
			</BaseContainer>
		</BaseLayout>
	)	
}

export default Blogs;