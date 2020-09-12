import React, { useEffect } from "react";
import { BaseLayout, BaseContainer } from "../components/layouts";
import { Router } from "../routes";

const FourZeroFour = () => {
  useEffect(() => {
    setTimeout(() => {
      Router.pushRoute("/");
    }, 1000);
  }, []);

  return (
    <BaseLayout mainClass="home">
      <BaseContainer>
        <div className="heading-primary--main">
          404. The page was not found.
        </div>
        <div className="heading-primary--sub">
          Please wait while we redirect you...
        </div>
      </BaseContainer>
    </BaseLayout>
  );
};

export default FourZeroFour;
