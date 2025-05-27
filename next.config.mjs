/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'docs', // This creates files in 'docs' folder instead of 'out'
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/wenting-li-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/wenting-li-portfolio' : '',
}

export default nextConfig
