import type { NextConfig } from "next";

// Fully static export for GitHub Pages (served from https://lgchintake.github.io).
// If you deploy to a project repo (https://<user>.github.io/<repo>), set
// basePath: "/<repo>" and assetPrefix: "/<repo>/" below.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
