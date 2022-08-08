import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'cvdsucxt',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skEpNS2Gd8QTkbmgVPPxuyqOzFLUlXKGNGAfhDR0aP1474MRJkGuyDzAVcAQlidCSPnK1kdQvR2bB3xA3EMXxa10XnKU5hiUzZ4Y1pEPD3HdL3uwFlV7SlbWvIHwVg9kBa4eUKy38pzpH5H0qwpYZkuqnpe6B4DRraCL32VFjICg8QspEKlk',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);