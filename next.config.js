const withImages = require('next-images');

module.exports = withImages({
  webpack(config) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
      },
    });
    return config;
  },
  images: {
    domains: ['res.cloudinary.com', 'cdn-images-1.medium.com', 'images.unsplash.com'],
  },
});
