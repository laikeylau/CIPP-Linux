/**
 * Next.js Config - Modified for Linux deployment
 * 
 * This replaces the SWA-specific configuration.
 * 
 * File: CIPP-Frontend/next.config.js
 * 
 * Key changes:
 * 1. Removed Azure AD / MSAL environment variables (using local auth)
 * 2. Removed SWA-specific output config; keep export for Nginx static serving
 * 3. API proxy handled by Nginx in production (rewrites for dev only)
 */

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: [
      '@mui/material',
      '@mui/icons-material',
      '@mui/lab',
      '@mui/system',
      '@mui/x-date-pickers',
      'material-react-table',
      'mui-tiptap',
      'recharts',
      '@react-pdf/renderer',
    ],
    webpackMemoryOptimizations: true,
    preloadEntriesOnStart: false,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: './out',

  // API rewrites for local development only
  // In production, Nginx handles /api/ proxying
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:7071/api/:path*',
      },
    ];
  },
};

module.exports = config;
