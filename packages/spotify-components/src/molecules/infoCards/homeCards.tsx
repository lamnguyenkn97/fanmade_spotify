import React from 'react';
import {Card, Stack, TextButton, Image} from "../../atoms";
import {faHome, faSearch} from "@fortawesome/free-solid-svg-icons";
import spotifyLogo from '../../../public/logo/spotify-logo-white.png'
export const HomeCards = () => {
    return(
        <div className={'dse-spotify-home-card'}>
            <Card variant={'dark'} padding={'10px'}>
                <Stack direction={'column'} wrap={'nowrap'} justify={'center'} align={'start'}>
                    <Image src={spotifyLogo} alt={'Spotify-logo'} width={'78px'} height={'24px'} />
                    <TextButton variant={'primary'} text={'Home'} onClick={()=> {}} icon={faHome}/>
                    <TextButton variant={'primary'} text={'Search'} onClick={()=> {
                        window.location.href = '/search'

                    }} icon={faSearch}/>
                </Stack>
            </Card>
        </div>

    )
}