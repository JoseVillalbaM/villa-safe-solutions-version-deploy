/** @type {import('next').NextConfig} */

const FIREBASE_PROJECT = 'services-app-prod';

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self'
    https://js.stripe.com
    https://www.google.com
    https://www.gstatic.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob:
    https://i.postimg.cc
    https://firebasestorage.googleapis.com
    https://www.gstatic.com;
  font-src 'self';
  connect-src 'self'
    https://*.googleapis.com
    https://*.firebaseio.com
    https://firebasestorage.googleapis.com
    https://${FIREBASE_PROJECT}.firebaseapp.com
    https://api.stripe.com
    https://hooks.stripe.com
    https://www.google.com;
  frame-src
    https://js.stripe.com
    https://hooks.stripe.com
    https://${FIREBASE_PROJECT}.firebaseapp.com
    https://www.google.com;
  frame-ancestors 'none';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  media-src 'self';
`.replace(/\n/g, ' ').trim();

const nextConfig = {
  reactStrictMode: true,

  compiler: {
    styledComponents: true,
  },

  images: {
    domains: ['i.postimg.cc'],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy,
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(self "https://js.stripe.com")',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
