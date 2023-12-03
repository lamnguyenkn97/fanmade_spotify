import React from 'react';
import {Divider, Link, SpotifyIcon, Stack} from "../../atoms";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    return (
        <div className={'dse-spotify-header'}>
            <Stack direction='row' justify={'space-between'} align={'center'} wrap={'nowrap'}>
                <Stack direction='row' justify={'space-around'} align={'center'} wrap={'nowrap'} gap={'0'}>
                    <SpotifyIcon icon={faChevronLeft} size={'1x'} border color='white' backgroundColor={'black'}/>
                    <SpotifyIcon icon={faChevronRight} size={'1x'} border color='white' backgroundColor={'black'}/>
                </Stack>
                <Stack direction='row' justify={'space-around'} align={'center'} wrap={'nowrap'}>
                    <Link text='Premium' to='/'/>
                    <Link text='Support' to='/'/>
                    <Link text='Download' to='/'/>
                    <Divider width={2} height={30}/>
                    <Link text='Signup' to='/'/>
                    <Link text='Login' to='/'/>
                </Stack>
            </Stack>
        </div>)

}
