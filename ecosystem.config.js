module.exports = {
  apps: [
    {
      name: `line-webview`,
      script: "serve",
      env: {
        PM2_SERVE_PATH: "./dist",
        PM2_SERVE_PORT: 52301,
        PM2_SERVE_SPA: "true",
        NODE_ENV: 'sandbox',
      },
    },
  ],
};