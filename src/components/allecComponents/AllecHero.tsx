import {Image} from '@shopify/hydrogen';
import { urlFor } from '~/hooks/useSanityQuery';

const SanityHero = ({data}: any) => {
  // TODO: uncomment when works
  const imageSrc = data.hero.content[0].image.asset._ref;
  return (
    <section className="relative w-screen h-screen-no-nav">
      <Image
        width={1920}
        height={500}
        // src={'/src/assets/ferrari.jpeg'}
        // src={`https://maniere-skin-rituals.sanity.studio/${imageSrc}`}
        src={`${urlFor(imageSrc).url()}`}
        alt={``}
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default SanityHero;

// https://cdn.sanity.io/images/m07i84rl/production/23635126170f6abe7c1eea28e0026abc22c28c18-1600x1060.jpg