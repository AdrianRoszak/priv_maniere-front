import AllecHero from '~/components/allecComponents/organisms/AllecHero';
import Canon from '~/components/typography/Canon';
import {useSanityQuery} from '~/hooks/useSanityQuery';

const HomePageData = () => {
  const {data = []} = useSanityQuery({
    hydrogenQueryOptions: {preload: true},
    query: `*[_type == 'home'][0]`,
  });

  return (
    <>
      <AllecHero data={data} />
      <Canon>{data.modules[0].body}</Canon>
    </>
  );
};

export default HomePageData;
