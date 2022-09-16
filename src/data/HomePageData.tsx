import SanityHero from '~/components/sanity/SanityHero';
import {useSanityQuery} from '~/hooks/useSanityQuery';

const HomePageData = () => {
  const {data = []} = useSanityQuery({
    hydrogenQueryOptions: {preload: true},
    query: `*[_type == 'home'][0]`,
  });

  return <SanityHero data={data} />
};

export default HomePageData;
