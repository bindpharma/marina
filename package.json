/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Unsplash CDN
      { protocol: 'https', hostname: 'images.unsplash.com' },
      // Plus URL — Unsplash plus images
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      // Pexels (alternative)
      { protocol: 'https', hostname: 'images.pexels.com' },
      // aslanmarin.com — kendi WordPress'inizden görsel kullanmak için
      { protocol: 'https', hostname: 'aslanmarin.com' },
      { protocol: 'https', hostname: 'www.aslanmarin.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },
};

export default nextConfig;
