import type { NextConfig } from "next";

const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@repo/api', '@repo/auth'],
    output: 'standalone',
    experimental: {
        outputFileTracingRoot: require('path').join(__dirname, '../../'),
    },
};

module.exports = nextConfig;
