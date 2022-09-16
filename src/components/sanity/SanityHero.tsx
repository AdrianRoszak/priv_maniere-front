import {Image} from '@shopify/hydrogen';

const SanityHero = ({data}) => {
  const title = data.hero.title;
  const imageSrc = data.hero.content[0].image.asset._ref;
  return (
    <>
      <Image width={1920} height={900} src={imageSrc} alt={``} />
      <p>{title}</p>;
    </>
  );
};

export default SanityHero;
