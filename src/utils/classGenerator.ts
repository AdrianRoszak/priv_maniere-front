export {getFontWeight, getColor};

function getFontWeight(fontWeight: number) {
  switch (fontWeight) {
    case 300:
      return `font-light`;
    case 400:
      return `font-normal`;
    case 700:
      return `font-bold`;
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
    default:
      return `text-contrast`;
  }
}
