// Copyright 1999-2018. Plesk International GmbH. All rights reserved.
import path from 'path';

// const basePath = path.resolve(__dirname, '..');
const resolve = name => path.resolve(__dirname, name);

module.exports = {
    mode: 'production',
    context: resolve('src'),
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: resolve('dist'),
        library: 'PleskExtSdk',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    externals: {
        '@plesk/ui-library': {
            commonjs: '@plesk/ui-library',
            commonjs2: '@plesk/ui-library',
            amd: 'plesk-ui-library',
        },
    },
};
