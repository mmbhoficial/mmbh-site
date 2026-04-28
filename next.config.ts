import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/loja",
        destination: "https://marchadamaconhabh.com.br/loja",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
