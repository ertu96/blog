/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = withContentlayer({ ...nextConfig })
