import {Image} from '@shopify/hydrogen';
import {urlFor} from '~/hooks/useSanityQuery';
import {Canon, GreatPrimer} from '../typography/index';

const SanityHero = ({data}: any) => {
  // TODO: uncomment when works
  const imageSrc = data.hero.content[0].image.asset._ref;
  const title = data.hero.title;
  const subtitle = data.hero.subtitle;
  return (
    <section className="relative w-screen h-screen-no-nav">
      <Image
        width={1920}
        height={500}
        src={`${urlFor(imageSrc).url()}`}
        alt={``}
        className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
      />
      <div className={`text-center`}>
        {title && <Canon color="white">{title}</Canon>}
        {subtitle && (
          <>
            <GreatPrimer color="white">{subtitle}</GreatPrimer>
          </>
        )}
      </div>
    </section>
  );
};

export default SanityHero;
