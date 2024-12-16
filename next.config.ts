import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path+',
        has: [
          {
            type: 'host',
            value: 'allpensandink.com'
          }
        ],
        destination: 'https://resources.latinowebstudio.com/:path+',
        permanent: true,
      }
    ];
  },
  // other configurations...
};

export default nextConfig;
