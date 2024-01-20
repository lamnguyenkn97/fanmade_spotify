import React from 'react';
import {Stack, Image, Body3, Title, Link} from "../../atoms";


export const PlaylistCover = () => {
    return (
        <div>
            <Stack height={'100%'} align={'end'}>
                <Image imageSize={'extraLarge'}
                       src={'https://i.scdn.co/image/ab67706f000000026de2f3f49773248113cb8794'} alt={'playlist cover'}/>
                <Stack direction={'column'} align={'start'} justify={'space-evenly'} height={'60%'}>
                    <Body3 text={'Playlist'} color={'white'}/>
                    <Title text={'Wake Up Gently'} color={'white'}/>
                    <Body3 text={'Wake up at your own pace with gentle piano music.'} color={'white'}/>
                    <Stack>
                        <Image variant={'round'} imageSize={'extraSmall'}
                               src={'https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5'}
                               alt={'spotify icon'}/>
                        <Link text={'Spotify'} component={'Body3'} color={'white'} onClick={()=>{}} to={'/'} />
                        <Stack>
                            <ul>
                                <li><Body3 color={'white'} text={'211,885 likes'}/></li>
                                <li><Body3 color={'white'} text={'108 songs, 4 hr 30 min'}/></li>
                            </ul>
                        </Stack>
                    </Stack>
                </Stack>

            </Stack>
        </div>
    )
}