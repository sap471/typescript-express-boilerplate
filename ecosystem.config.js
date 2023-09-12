module.exports = {
  apps: [
    {
      name: 'api',
      script: './dist/server.js',
      max_memory_restart: '256M',
      ignore_watch: ['node_modules'],
    },
  ],
};
