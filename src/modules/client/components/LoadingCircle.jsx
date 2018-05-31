import React from 'react'
import {CircularProgress} from 'material-ui'

export const LoadingCircle = () => (
    <div>
        <CircularProgress
            className="loading-circle"
            color="#2f3e6c"
            size={100}
            thickness={7}/>
    </div>
);