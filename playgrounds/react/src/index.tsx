import React from 'react';
import ReactDOM from 'react-dom';
import '@dse.spotify/scss/src/lib/button.css';
import '@dse.spotify/scss/src/lib/utility.css';
import '@dse.spotify/scss/src/lib/textButton.css';
import '@dse.spotify/scss/src/lib/link.css';
import '@dse.spotify/scss/src/lib/icon.css';
import '@dse.spotify/scss/src/lib/stack.css';
import '@dse.spotify/scss/src/lib/divider.css';
import '@dse.spotify/scss/src/lib/header.css';
import {SpotifyIcon, TextButton, TextField, Button, Divider, Header} from "@dse.spotify/react";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";


ReactDOM.render(
    <>
        <TextButton variant="primary" text="Hello World" onClick={() => console.log('Hello World')}/>
        <SpotifyIcon icon={faEnvelope} size={'2x'} border/>
        <Button variant={'primary'} text={'Button Icon'} onClick={() => {
        }} icon={faEnvelope} size='medium'/>
        <Divider width={100} height={1}/>
        <TextField label={'username'} name={'username'} placeholder={'Lam Nguyen'}/>
        <Header />
    </>,
    document.getElementById('root'))