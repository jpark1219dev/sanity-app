
import client, { previewClient } from './sanity';
import imageUrlBuilder from "@sanity/image-url";

const pageFields = `
	title,
	header,
	section_one_image,
	section_two_image,
`

const builder = imageUrlBuilder(client);
const getClient = preview => preview ? previewClient: client;

export function urlFor(source) {
	return builder.image(source);
}

export async function getDataByPage(page, preview) {
	const currentClient = getClient(preview);
	const result = await currentClient
		.fetch(`*[_type == "page" && title == $page] {
			${pageFields}
			section_one_content[]{..., "asset": asset->},
			section_two_content[]{..., "asset": asset->}
		}`, {page});
	return result[0];
}