import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const config: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: { typedRoutes: true }
};

export default withContentlayer(config);