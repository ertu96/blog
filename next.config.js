/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
}

module.exports = withContentlayer({ ...nextConfig })
