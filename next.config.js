/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MYSQL_HOST: 'localhost',
    MYSQL_DATABASE: 'jotacom',
    MYSQL_USER: 'root',
    MYSQL_PASSWORD: '',
  },
  webpack: (config) => {
    // https://stackoverflow.com/questions/68339243/how-can-i-use-top-level-await-in-typescript-next-js
    // this will override the experiments
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true } };
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true 
    return config;
  },
}

module.exports = nextConfig
