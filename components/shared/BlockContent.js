import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "lib/api";

const BlockRenderer = (props) => {
  const { style = "normal" } = props.node;
  if (style === "h1" || style === "h2" || style === "h3" || style === "h4" || style === "h5") {
    return <div className="heading-secondary heading-secondary--main">{props.children}</div>;
  }
  if (style === "normal") {
    return <div className="paragraph-primary">{props.children}</div>;
  }
  return BlockContent.defaultSerializers.types.block(props);
};

const serializers = {
  types: {
    image: ({ node: { asset, alt, position = "center" } }) => {
      return (
        <div className={`content-image-${position}`}>
          <img src={urlFor(asset)} />
          <div className="image-alt">{alt}</div>
        </div>
      );
    },
    block: BlockRenderer,
  },
};

const Content = ({ content }) => (
  <BlockContent serializers={serializers} blocks={content}></BlockContent>
);

export default Content;
