import React from 'react'
import {CircularProgress} from 'material-ui'

export const Loading = () => (
    <div>
        <CircularProgress
            color="#2f3e6c"
            size={29}
            thickness={4}/>
    </div>
);

export const LoadingCircle = () => (
    <div>
        <CircularProgress
            className="loading-circle"
            color="#2f3e6c"
            size={100}
            thickness={7}/>
    </div>
);