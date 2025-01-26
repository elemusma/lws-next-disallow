import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'resources.latinowebstudio.com',
      },
    ],
  },
};

export default nextConfig;
