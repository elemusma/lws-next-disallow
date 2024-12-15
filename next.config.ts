import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/((?!$).*)',  // This regex matches any path except the root '/'
        has: [
          {
            type: 'host',
            value: 'allpensandink.com'
            // value: 'latinowebstudio.com'
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
