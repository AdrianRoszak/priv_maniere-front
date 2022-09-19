import AllecHero from '~/components/allecComponents/AllecHero';
import {useSanityQuery} from '~/hooks/useSanityQuery';

const HomePageData = () => {
  const {data = []} = useSanityQuery({
    hydrogenQueryOptions: {preload: true},
    query: `*[_type == 'home'][0]`,
  });

  return <AllecHero data={data} />;
};

export default HomePageData;
