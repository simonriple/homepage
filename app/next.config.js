module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.glsl/,
      type: 'asset/source',
    })
    return config
  },
}
