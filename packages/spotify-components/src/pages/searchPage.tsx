import React from 'react';
import genreData from '../../data/genreList.json'
import {Footer, GenreCard, Header} from "../molecules";
import {Body3, Divider, SpotifyIcon, Stack, Subtitle} from "../atoms";
import {Colors} from "@dse.e/foundation";
import {VerticalNavBar} from "../molecules/navBar/verticalNavBar";
import {compact} from "lodash";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";


export const SearchPage = () => {

    const genreSections = genreData.data.browseStart.sections.items[0].sectionItems.items
    console.log('GENRE SECTIONS', genreSections)
    const processedGenreData = compact(genreSections.map((section: any) => {
        if (!section.content?.data?.data?.cardRepresentation?.artwork?.sources[0]){
            return null
        }
        return {
            genreName: section.content?.data?.data?.cardRepresentation?.title?.transformedLabel,
            genreImage: section.content?.data?.data?.cardRepresentation?.artwork?.sources[0].url,
            genreBackground: section.content?.data?.data?.cardRepresentation?.backgroundColor.hex
        }
    }))
    console.log('GENRE DATA', processedGenreData)
    return (
            <Stack gap={'0'} align={"start"} backgroundColor={Colors.black} width={'100%'}>
                <VerticalNavBar/>
                <Stack width={'70%'} direction={'column'} align={'start'}>
                    <Header transparent enableSearch/>
                    <Subtitle text={'Browse all'} color={Colors.white}/>
                    <Stack wrap={'wrap'} width={'100%'}>
                        {
                            processedGenreData.map((datum: any) => {
                                return (
                                    <GenreCard
                                        genre={datum.genreName as string}
                                        artworkUrl={datum.genreImage as string}
                                        backgroundColor={datum.genreBackground as string}
                                        onClick={() => console.log('clicked')}/>
                                )
                            })
                        }
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

            </Stack>
    )
}