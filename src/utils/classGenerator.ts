export {getFontWeight, getColor};

function getFontWeight(fontWeight: number) {
  switch (fontWeight) {
    case 100:
      return `font-thin`;
    case 200:
      return `font-extralight`;
    case 300:
      return `font-light`;
    case 400:
      return `font-normal`;
    case 500:
      return `font-medium`;
    case 600:
      return `font-semiBold`;
    case 700:
      return `font-bold`;
    case 800:
      return `font-extraBold`;
    case 900:
      return `font-black`;
    default:
      return `font-normal`;
  }
}

function getColor(color: string) {
  switch (color) {
    case 'primary':
      return `text-primary`;
    case 'contrast':
      return `text-contrast`;
    case 'supplementary':
      return `text-supplementary`;
    case 'white':
      return 'text-white';
    default:
      return `text-contrast`;
  }
}
