import React from 'react';
import ReactDOM from 'react-dom';
import '@dse.spotify/scss/src/lib/utility.css';
import {Body1, Margin, Padding} from "@dse.spotify/react";


ReactDOM.render(
    <Padding size='xxl' top><div style={{backgroundColor: 'red'}}><Body1 text={'HELLO WORLD'}/></div></Padding>,
    document.getElementById('root'))