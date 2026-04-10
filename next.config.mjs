/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '/transmute',
  assetPrefix: '/transmute',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/transmute',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
