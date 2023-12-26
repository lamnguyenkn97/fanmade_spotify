import React from "react";
import {Body2, Body3, Button, Card, Link, Stack, TextButton} from "../../atoms";
import {faBook, faEarth} from "@fortawesome/free-solid-svg-icons";

export const LibraryCards = () => {
    return(
        <div className={'dse-spotify-library-card'}>
            <Card variant={'dark'} padding={'10px'}>
                <Stack direction={'column'} wrap={'nowrap'} justify={'space-between'} align={'start'} height={'100%'}>
                    <Stack direction={'column'} align={'start'}>
                        <TextButton variant={'primary'} text={'Your Library'} onClick={()=> {}} icon={faBook}/>
                        <Card variant={'light'} padding={'20px'}>
                            <Stack direction={'column'} wrap={'nowrap'} justify={'space-evenly'} align={'start'}>
                                <Body2 color={'white'} text={'Create your first playlist'} />
                                <Body3 color={'white'} text={'It\' easy, we\'ll help you'} />
                                <Button size={'small'} text={'Create Playlist'} variant={'white'} onClick={()=> {}} fontSize={'0.875rem'}/>
                            </Stack>
                        </Card>
                        <Card variant={'light'} padding={'20px'} width={'100%'}>
                            <Stack direction={'column'} wrap={'nowrap'} justify={'space-evenly'} align={'start'}>
                                <Body2 color={'white'} text={'Let\' find some podcast to follow'} />
                                <Body3 color={'white'} text={'We will keep you updated every episode'} />
                                <Button size={'small'} text={'Browse Podcast'} variant={'white'} onClick={()=> {}} fontSize={'0.875rem'}/>
                            </Stack>
                        </Card>
                    </Stack>
                    <Stack wrap={'wrap'}>
                        <Link component={'Body3'} text={'Legal'} to={'/'}/>
                        <Link component={'Body3'} text={'Private Center'} to={''}/>
                        <Link component={'Body3'} text={'Private Policy'} to={''}/>
                        <Link component={'Body3'} text={'Cookies'} to={''}/>
                        <Link component={'Body3'} text={'About Ads'} to={''}/>
                        <Link component={'Body3'} text={'Accessibility'} to={''}/>
                        <Link component={'Body3'} text={'Cookies'} to={''}/>
                        <Button icon={faEarth} text={'English'} onClick={()=> {}} variant={'secondary'} size={'small'}/>
                    </Stack>
                </Stack>
            </Card>
        </div>

    )
}