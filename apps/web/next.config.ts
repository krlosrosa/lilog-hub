import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@lilo-wms/ui'],
  output: 'standalone',
  outputFileTracingRoot: path.join(process.cwd(), '../..'),
};

export default nextConfig;
