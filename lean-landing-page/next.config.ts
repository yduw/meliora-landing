/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disabling on production builds since we're running it in the workflow
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  typescript: {
    // Disabling on production builds since we're running it in the workflow
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;