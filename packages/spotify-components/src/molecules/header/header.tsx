import React from 'react';
import {Divider, Link, SpotifyIcon, Stack} from "../../atoms";
import {Colors} from "@dse.e/foundation/lib/color";
import {SearchInput} from "../search";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

export const Header = ({transparent = false, enableSearch=false}: { transparent?: boolean, enableSearch?: boolean }) => {
    return (
        <div className={transparent ? 'dse-spotify-header-transparent' : 'dse-spotify-header'}>
            <Stack direction='row' justify={'space-between'} align={'center'} wrap={'nowrap'} height={'100%'}>
                <Stack justify={'start'} width={'50%'}>
                    <Stack direction='row' justify={'space-around'} align={'center'} wrap={'nowrap'} gap={'xs'}>
                        <SpotifyIcon icon={faChevronLeft} size={'1x'} color={Colors.grey13} border
                                     backgroundColor={'black'}/>
                        <SpotifyIcon icon={faChevronRight} size={'1x'} color={Colors.grey13} border
                                     backgroundColor={'black'}/>
                    </Stack>
                    {enableSearch && <SearchInput placeholder={'What do you want to listen to'} onChange={(_e) => {
                    }} value={''} name={''} />}
                </Stack>
                <Stack direction='row' justify={'space-around'} align={'center'} wrap={'nowrap'}>
                    <Link text='Premium' to='/' color={Colors.grey11}/>
                    <Link text='Support' to='/' color={Colors.grey11}/>
                    <Link text='Download' to='/' color={Colors.grey11}/>
                    <Divider width={2} height={30}/>
                    <Link text='Signup' to='/signup' color={Colors.grey11}/>
                    <Link text='Login' to='/login' color={Colors.grey11}/>
                </Stack>
            </Stack>
        </div>)

}
