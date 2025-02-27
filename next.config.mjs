/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/jabu-app', // Replace with your GitHub repo name
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Disable server components since we're doing static export
  experimental: {
    serverActions: false,
  },
}

export default nextConfig

