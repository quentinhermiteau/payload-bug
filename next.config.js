import { withPayload } from '@payloadcms/next/withPayload'

import redirects from './redirects.js'

const BACK_URL = process.env.BACK_URL || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...[BACK_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
        }
      }),
    ],
  },
  reactStrictMode: true,
  redirects,
  output: 'standalone',
  distDir: 'dist',
  assetPrefix: '/admin',
  publicRuntimeConfig: {
    basePath: '/admin',
  },
  rewrites() {
    return [
      {
        source: '/_next/:path*',
        destination: '/admin/_next/:path*',
      },
    ]
  },
  poweredByHeader: false,
  headers: async () => {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; " + "img-src 'self' blob: data: localhost",
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
}

export default withPayload(nextConfig)
