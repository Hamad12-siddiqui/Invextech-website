/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      swcLoader: true, // Ensure SWC is enabled
      swcMinify: true, // Enable SWC minification
    },
    webpack: (config) => {
      // Ensure cross-platform compatibility
      config.resolve.fallback = { fs: false };
      return config;
    },
  };
  
  export default nextConfig;
  