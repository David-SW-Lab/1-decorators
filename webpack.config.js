const path = require('path');

const sourcePath = path.resolve(__dirname, './src');

module.exports = env => ({
    mode: 'development',
    entry: path.join(sourcePath, 'initialize.js'),
    output: {
        filename: 'ScheduleTestProgram.js'
    },
    module: {
        rules: [
            {
                include: sourcePath,
                exclude: ['/node_modules'],
                loader: 'babel-loader'
            }
        ]
    },
    target: 'node',
    resolve: {
        modules: [sourcePath, 'node_modules'],
        alias: {
            platform: path.resolve(__dirname, 'src', 'platform', env.PLATFORM)
        },
        extensions: ['.json', '.js']
    },
    devtool: 'source-map'
});
