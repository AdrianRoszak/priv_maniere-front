import SanityClient from '@sanity/client';
import {HydrogenUseQueryOptions, useQuery} from '@shopify/hydrogen';
import {sanityConfig} from '../../sanity.config';
import imageUrlBuilder from '@sanity/image-url'

const client = SanityClient(sanityConfig);
const builder = imageUrlBuilder(client)

export function useSanityQuery({
  query,
  params = {},
  hydrogenQueryOptions,
}: {
  query: string;
  params?: any;
  hydrogenQueryOptions?: HydrogenUseQueryOptions;
}) {
  return useQuery(
    [query, params],
    async () => await client.fetch(query, params),
    hydrogenQueryOptions,
  );
}

export function urlFor(source) {
  return builder.image(source)
}
