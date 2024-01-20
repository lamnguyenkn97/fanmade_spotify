import {Body3, Image, Link, Stack} from "../../atoms";
import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Colors} from "@dse.e/foundation/lib/color";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";

export type TrackProps = {
    index: string
    artist: string
    songTitle: string
    albumUrl: string
    album: string
    timeUploaded: string
    trackLength: string
    headings: { title: string, size: number }[]
}
export const Track = ({index, songTitle, albumUrl, album, timeUploaded, trackLength, artist, headings}: TrackProps) => {
    const [heartIconOpen, setHeartIconOpen] = React.useState(false)
    const [heartIconColor, setHeartIconColor] = React.useState(Colors.grey11)
    return (
        <Stack onMouseEnter={() => setHeartIconOpen(true)} onMouseLeave={() => setHeartIconOpen(false)} align={'center'}
               width={'100%'}>
            <Body3 width={(headings[0].size * 100 / 12).toFixed(2).toString() + '%'} text={index}
                   color={Colors.grey11}/>
            <Stack width={(headings[1].size * 100 / 12).toFixed(2).toString() + '%'}>
                <Image imageSize={"medium"}
                       src={albumUrl} alt={'Song title'}/>
                <Stack direction={'column'} justify={'space-around'} align={'start'}>
                    <Link text={songTitle} color={Colors.white} to={'/'} component={'Body3'}/>
                    <Link variant={'secondary'} text={artist} color={Colors.grey11} to={'/'} component={'Body3'}/>
                </Stack>
            </Stack>
            <Link width={(headings[2].size * 100 / 12).toFixed(2).toString() + '%'} variant={'secondary'} text={album}
                  color={Colors.grey11} to={'/'} component={'Body3'}/>
            <Stack width={(headings[3].size * 100 / 12).toFixed(2).toString() + '%'} justify={'space-between'}>
                <Body3 text={timeUploaded} color={Colors.grey11}/>
                {heartIconOpen && <FontAwesomeIcon onMouseEnter={() => {
                    setHeartIconColor('white')
                }} onMouseLeave={() => setHeartIconColor(Colors.grey11)} icon={faHeart} size={'1x'}
                                                   color={heartIconColor}/>}
            </Stack>
            <Stack width={(headings[4].size * 100 / 12).toFixed(2).toString() + '%'}>
                <Body3 text={trackLength} color={Colors.grey11}/>
                {heartIconOpen && <FontAwesomeIcon onMouseEnter={() => {
                    setHeartIconColor('white')
                }} onMouseLeave={() => setHeartIconColor(Colors.grey11)} icon={faEllipsis} size={'1x'}
                                                   color={heartIconColor}/>}
            </Stack>
        </Stack>
    )
}