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
