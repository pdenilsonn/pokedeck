/** @type {import('next').NextConfig} */



const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**'
         
      },
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**'
      },
    ]
  }
};


export default nextConfig;
