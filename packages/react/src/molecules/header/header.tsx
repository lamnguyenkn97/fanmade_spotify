import React from 'react';
import {Divider, Link, SpotifyIcon, Stack} from "../../atoms";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {Colors} from "@dse.e/foundation/lib/color";

export const Header = () => {
    return (
        <div className={'dse-spotify-header'}>
            <Stack direction='row' justify={'space-between'} align={'center'} wrap={'nowrap'} height={'100%'}>
                <Stack direction='row' justify={'space-around'} align={'center'} wrap={'nowrap'} gap={'xs'}>
                    <SpotifyIcon icon={faChevronLeft} size={'2x'} color={Colors.grey13} border backgroundColor={'black'}/>
                    <SpotifyIcon icon={faChevronRight} size={'2x'} color={Colors.grey13} border backgroundColor={'black'}/>
                </Stack>
                <Stack direction='row' justify={'space-around'} align={'center'} wrap={'nowrap'}>
                    <Link text='Premium' to='/' color={Colors.grey11}/>
                    <Link text='Support' to='/' color={Colors.grey11}/>
                    <Link text='Download' to='/' color={Colors.grey11}/>
                    <Divider width={2} height={30}/>
                    <Link text='Signup' to='/' color={Colors.grey11}/>
                    <Link text='Login' to='/' color={Colors.grey11}/>
                </Stack>
            </Stack>
        </div>)

}
