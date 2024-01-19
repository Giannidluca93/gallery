/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'interactive-examples.mdn.mozilla.net',
      },
    ],
  },
};

export default nextConfig;
