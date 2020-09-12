import React from "react";
import {
  BaseLayout,
  BaseContainer,
  NavHeader,
  BaseGrid,
  Panel,
} from "../components/layouts";
import Content from "../components/shared/BlockContent";
import { urlFor, getDataByPage } from "lib/api";

const Workshops = ({ preview, pageData = null }) => {
  return (
    <BaseLayout mainClass="home">
      <BaseContainer>
        <NavHeader />
        {pageData && (
          <>
            <div className="heading-primary heading-primary--main mb-md">
              {pageData?.header}
            </div>
            <BaseGrid>
              <Panel width={10}>
                <img
                  className="mb-md"
                  src={urlFor(pageData?.section_one_image).url()}
                ></img>
              </Panel>
              <Panel width={10}>
                <div className="panel-group mt-md">
                  <Content content={pageData?.section_one_content} />
                </div>
              </Panel>
            </BaseGrid>
            <BaseGrid>
              <Panel width={10}>
                <img
                  className="mb-md"
                  src={urlFor(pageData?.section_two_image).url()}
                ></img>
              </Panel>
              <Panel width={10}>
                <div className="panel-group mt-md">
                  <Content content={pageData?.section_two_content} />
                </div>
              </Panel>
            </BaseGrid>
          </>
        )}
      </BaseContainer>
    </BaseLayout>
  );
};

export default Workshops;

export async function getStaticProps({ preview = false }) {
  const pageData = await getDataByPage("Workshops", preview);
  // console.log(pageData);
  return {
    props: {
      preview,
      pageData,
    },
    revalidate: 1,
  };
}
