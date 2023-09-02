/** @type {import('next').NextConfig} */
const nextConfig = {
 compiler: {
  styledComponents: true,
 },
 reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
}

module.exports = nextConfig
