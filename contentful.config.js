const url = process.env.NEXT_PUBLIC_BASE_URL;

module.exports = {
  contentful: {
    space_id: process.env.CONTENTFUL_SPACE_ID || '',
    cda_token: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    cpa_token: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
  },
  meta: {
    title: 'Servicios comunitarios San Isidro',
    description: 'En esta página encontrarás toda la información acerca de los servicios comunitarios qué se brindan en el partido de San Isidro',
    url,
    image:
      'url("https://images.ctfassets.net/ruj3ara9e3f2/1xeKYb3n7AF2xp44iXp9sj/05d856f82c6f3f3ffc63242c38126cd4/8-Qualities-That-Make-a-Positive-Community.jpg?w=2524")',
  },
  icon: {
    light:
      'https://images.ctfassets.net/w8vf7dk7f259/llZXwDCnl9NqdyuVvjn1n/d20cea90225e7f53dfbf8a18a46e972d/gocoin-icon-light.svg',
    dark: 'https://images.ctfassets.net/w8vf7dk7f259/i9iu6GU6dFWQJJwJzwxCT/952cc3bab415e28f521c22933072a09c/gocoin-icon.svg',
    width: 66,
    height: 64,
  },
};
