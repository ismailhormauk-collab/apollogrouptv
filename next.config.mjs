/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tree-shake lucide-react so only imported icons are bundled.
  // Without this Next.js 14 pulls the entire icon library (~400 KB+).
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  images: {
    formats: ["image/avif", "image/webp"],
    // Declare local image sizes so Next.js can generate srcsets without
    // fetching external domains.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compress all responses (brotli / gzip).
  compress: true,
};

export default nextConfig;
