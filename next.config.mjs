import nextPWA from 'next-pwa';

const nextConfig = {
  images: {
    domains: [
      "cdn.mos.cms.futurecdn.net",
      "tse1.mm.bing.net",
      "tse2.mm.bing.net",
      "tse3.mm.bing.net",
      "hemophilianewstoday.com",
      "www.quanticate.com"
    ],
  },
};

const withPWA = nextPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // optional: disables PWA in dev
});

export default withPWA(nextConfig);
