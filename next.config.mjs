/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "st5.depositphotos.com",
      },
      {
        protocol: "https",
        hostname: "static5.depositphotos.com",
      },
      {
        protocol: "https",
        hostname: "static7.depositphotos.com",
      },
    ],
  },
};

export default nextConfig;
