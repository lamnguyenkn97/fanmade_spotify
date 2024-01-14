import {Body3, Divider, Link, Panel, SpotifyIcon, Stack} from "../../atoms";
import React from "react";
import {Colors} from "@dse.e/foundation/lib/color";
import {Playlist} from "../../molecules/playlist";
import playlistData from '../../../data/processedPlaylist.json'
import {Header, Footer} from "../../molecules";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

export const PlaylistPage = () => {
    return (
        <>
            <Header/>
            <Stack direction={'column'} width={'70%'} height={'100%'}>
                <Stack direction={'column'} gap={'0'} width={'100%'} >
                    <Panel variant={'black'}>
                        {playlistData.map(playlist => (
                            <>
                                <Stack justify={'space-between'} width={'95%'}>
                                    <Link to={''} component={'Subtitle'} text={playlist.title} color={Colors.white}/>
                                    <Link component={"Body2"} to={"/"} text={'Show all'} color={Colors.grey6}/>
                                </Stack>
                                <Stack justify={'space-evenly'}>
                                    {playlist.sectionList.slice(0, 5).map(section => (
                                        <Playlist name={section.name} description={section.description}
                                                  imageSrc={section.imgSrc}/>
                                    ))}
                                </Stack>
                            </>
                        ))}
                    </Panel>
                </Stack>
                <Stack direction={'row'} justify={'space-between'} width={'90%'}>
                    <Footer />
                    <Stack direction={'row'} width={'30%'} justify={'end'}>
                        <SpotifyIcon icon={faInstagram} size={'1x'} color={Colors.white} border backgroundColor={Colors.grey14}/>
                        <SpotifyIcon icon={faTwitter} size={'1x'} color={Colors.white} border backgroundColor={Colors.grey14}/>
                        <SpotifyIcon icon={faFacebook} size={'1x'} color={Colors.white} border backgroundColor={Colors.grey14}/>
                    </Stack>
                </Stack>
                <Divider width={'100%'} height={'1px'} />
                <Stack justify={'start'} width={'100%'}>
                    <Body3 text={'© 2023 Spotify AB'} color={Colors.grey6}/>
                </Stack>
            </Stack>
        </>

    )
}