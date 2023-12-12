import React from 'react'
import {Image, Stack} from "../../atoms";
import spotifyLogo from '../../../public/logo/spotify-logo-white.png'

export const NavBarLogin = () => {
    return (
        <header className={'dse-spotify-navbar-login'}>
            <Stack direction={'row'} justify={'space-between'} align={'center'} wrap={'nowrap'} height={'100%'}>
                <Image src={spotifyLogo} alt={'Spotify Logo'} width={'117px'} height={'36px'}/>
            </Stack>
        </header>
    )
}