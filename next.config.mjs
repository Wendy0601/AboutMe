/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // The following values will work automatically with GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/wenting-li-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/wenting-li-portfolio' : '',
}

export default nextConfig
