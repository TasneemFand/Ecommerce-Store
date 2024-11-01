import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dbts6vlea/**', // Use your Cloudinary cloud name here
      },
    ],
  },
};

export default nextConfig;
