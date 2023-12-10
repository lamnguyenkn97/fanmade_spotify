import React from 'react';
import {Card, Image, Stack, TextButton} from "../../atoms";
import {faHome, faSearch} from "@fortawesome/free-solid-svg-icons";
import spotifyLogo from '../../../public/logo/spotify-logo-white.png';
export const HomeCards = () => {
    return(
        <Card variant={'dark'} width={'200px'} height={'400px'}>
            <Stack direction={'column'} wrap={'nowrap'} justify={'space-evenly'} align={'start'}>
                <Image src={spotifyLogo} alt={'Spotify-logo'} width={'24px'} height={'24px'} />
                <TextButton variant={'primary'} text={'Home'} onClick={()=> {}} icon={faHome}/>
                <TextButton variant={'primary'} text={'Search'} onClick={()=> {}} icon={faSearch}/>
            </Stack>
        </Card>
    )
}