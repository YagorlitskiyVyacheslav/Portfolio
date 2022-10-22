/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

module.exports = () =>
  nextTranslate({
    env: {},
    reactStrictMode: false,
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      domains: ["api.quan2um.com"],
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "removeViewBox",
                    active: false,
                  },
                  {
                    name: "removeTitle",
                    active: false,
                  },
                  {
                    name: "convertShapeToPath",
                    active: false,
                  },
                  {
                    name: "mergePaths",
                    active: false,
                  },
                ],
              },
            },
          },
        ],
      });

      return config;
    },
  });
