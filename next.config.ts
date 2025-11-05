import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false,
  images:{
    remotePatterns:[
      {
         protocol: "https",
        hostname: "cdn.dummyjson.com",
      }
    ]
  }
};

export default nextConfig;
