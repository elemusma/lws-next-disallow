import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'latinowebstudio.com'
          }
        ],
        destination: 'https://resources.latinowebstudio.com/:path*',
        permanent: true, // or false, depending on your needs for SEO or HTTP status
      }
    ];
  },
  // other configurations...
};

export default nextConfig;
