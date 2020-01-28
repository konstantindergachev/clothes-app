export const getRoute = (name) => {
  switch (name) {
    case 'hats':
      return `/shop/${name}`;
    case 'jackets':
      return `/shop/${name}`;
    case 'sneakers':
      return `/shop/${name}`;
    case 'women':
      return `/shop/${name}`;
    case 'men':
      return `/shop/${name}`;
    default:
      return '/';
  }
};
