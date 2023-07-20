/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "funkytours.com",
      "cdn-ph-org.worldtattoogallery.com",
      "cdn1.ntv.com.tr",
    ],
  },
};

module.exports = nextConfig;
