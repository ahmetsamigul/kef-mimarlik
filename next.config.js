/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  allowedDevOrigins: ['127.0.0.1', '192.168.1.108'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    silenceDeprecations: ['legacy-js-api', 'import'],
  },
}

module.exports = nextConfig
