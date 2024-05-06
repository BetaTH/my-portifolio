/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/drive-viewer/**',
      },
      {
        protocol: 'http',
        hostname: 'drive.google.com',
        port: '',
      },
    ],
  },
}

export default nextConfig
