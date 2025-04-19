import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "olive-elderly-wildcat-734.mypinata.cloud",
        pathname: "/ipfs/**",
      },
    ],
  },
};

export default nextConfig;
