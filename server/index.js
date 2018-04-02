const path = require('path');
const proxy = require('http-proxy-middleware');
const cors = require('cors');
const express = require('express');
const {
    port,
    env,
    workingDirectory
} = require('./config');

const app = express();

app.use(cors());

switch (env) {
    case 'development' :
        const webpack = require('webpack');
        const webpackConfig = require('./../webpack.config');
        const compiler = webpack(webpackConfig);

        app.use(require('webpack-dev-middleware')(compiler, {
            withCredentials: false,
            noInfo         : false,
            quiet          : false,
            lazy           : false,

            watchOptions: {
                aggregateTimeout: 300,
                poll            : true
            },

            stats: {
                colors: true
            }
        }));

        app.use(require('webpack-hot-middleware')(compiler));

        const markupPath = path.join(workingDirectory, 'markup').normalize();

        app.use('/', express.static(markupPath));
        break;

    default :
        const buildAppPath = path.join(workingDirectory, '/build').normalize();

        app.use('/', express.static(buildAppPath));
        break;
}

app.use('/cms', proxy({
    target      : 'https://bookey-st.herokuapp.com',
    changeOrigin: true,
    ws          : true
}));

app.listen(3000, () => {
    console.log(`start`);
});
