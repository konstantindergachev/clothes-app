import { uuid } from '../helpers/uuid';

export const CATEGORIES_DATA = [
  {
    id: uuid(),
    title: 'шляпы',
    imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    linkUrl: 'hats',
  },
  {
    id: uuid(),
    title: 'куртки',
    imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    linkUrl: 'jackets',
  },
  {
    id: uuid(),
    title: 'кросовки',
    imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    linkUrl: 'sneakers',
  },
  {
    id: uuid(),
    title: 'женщины',
    imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
    linkUrl: 'women',
  },
  {
    id: uuid(),
    title: 'мужчины',
    // imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    // 'https://luxefeed.com/wp-content/uploads/2018/10/Andre-Hamann-6.jpg',
    // imgUrl: 'https://i.ya-webdesign.com/images/male-model-png-9.png',
    imgUrl:
      'https://m.22slides.com/aparsonsphotography/dean-1web-1759704.jpg?auto=format&w=800&s=47a9b99cf71b128fd3e645bc40783e6d',
    size: 'large',
    linkUrl: 'men',
  },
];
