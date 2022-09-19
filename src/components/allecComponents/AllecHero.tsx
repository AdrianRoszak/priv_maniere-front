import {Image} from '@shopify/hydrogen';

const SanityHero = ({data}: any) => {
  // TODO: uncomment when works
  // const imageSrc = data.hero.content[0].image.asset._ref;
  return (
    <section className="relative w-screen h-screen-no-nav">
      <Image
        width={1920}
        height={500}
        src={'/src/assets/ferrari.jpeg'}
        alt={``}
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default SanityHero;
