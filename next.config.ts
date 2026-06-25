import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shared.akamai.steamstatic.com",
        pathname: "/store_item_assets/**",
      },
      {
        protocol: "https",
        hostname: "images.steamusercontent.com",
        pathname: "/ugc/**",
      },
      {
        protocol: "https",
        hostname: "cdn.akamai.steamstatic.com",
        pathname: "/steam/apps/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/workshop", destination: "/workshop-maps", permanent: true },
      { source: "/tools", destination: "/hidden-spots", permanent: true },
      { source: "/tools/:path*", destination: "/hidden-spots", permanent: true },
      { source: "/hidden-spots/submit", destination: "/hidden-spots", permanent: true },
    ];
  },
};

export default nextConfig;
