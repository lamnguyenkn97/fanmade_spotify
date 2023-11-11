import React from 'react';
import ReactDOM from 'react-dom';
import {Color, Spacing} from '@dse.spotify/react';
import '@dse.spotify/scss/src/lib/utility.css';


ReactDOM.render(
    <Color hexCode='green' width={Spacing.xxl} height={Spacing.xxl} />,
    document.getElementById('root'))