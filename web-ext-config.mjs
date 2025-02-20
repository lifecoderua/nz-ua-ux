export default {
  // Global options:
  verbose: true,
  // Command options:
  build: {
    overwriteDest: true,
  },
  ignoreFiles: [
    'package-lock.json',
    'package.json',
    'debug',
    'src',
    'dist/nz-ua-ux.umd.js',
    'tsconfig.json',
    'vite.config.js',
    'web-ext-config.mjs',
    '.vscode'
  ],
};