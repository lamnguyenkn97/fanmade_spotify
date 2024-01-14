import React from 'react'
import {Body3} from "../typography";
import {Track} from "../../molecules";
import {Stack} from "../stack";
import {SpotifyIcon} from "../icons";
import {faEllipsis, faPlay} from "@fortawesome/free-solid-svg-icons";
import {Colors} from "@dse.e/foundation/lib/color";
import {Margin} from "../margin";
import {Divider} from "../divider";
import { faHeart } from '@fortawesome/free-regular-svg-icons';


type SpotifyTableProps = {
    headings: { title: string, size: number }[],
    data: any[]
}

export const SpotifyTable = ({headings, data}: SpotifyTableProps) => {
    return (
        <div className={'dse-spotify-songs'}>
            <Margin top bottom right left size={"md"}>
                <Stack justify={"start"} width={'100%'}>
                    <SpotifyIcon icon={faPlay} size={'2x'} color={'black'} backgroundColor={Colors.brandGreen} rounded />
                    <SpotifyIcon icon={faHeart} size={'2x'}  color={Colors.grey11}/>
                    <SpotifyIcon icon={faEllipsis} size={'2x'}  color={Colors.grey11}/>
                </Stack>
            </Margin>
            <Margin left size={'md'}>
                <table>
                    <thead>
                    <tr>
                        <Stack align={'center'} width={'100%'}>
                            {headings.map((heading) => (
                                <Body3 text={heading.title}
                                       width={(heading.size * 100 / 12).toFixed(2).toString() + '%'}
                                       color={Colors.grey11}/>
                            ))}
                        </Stack>
                    </tr>
                    <Divider width={'100%'} height={'1px'} background={Colors.grey6}/>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr>
                            <td key={index} className={'dse-spotify-track'}><Track index={index.toString()} artist={item.artist} songTitle={item.title}
                                                   timeUploaded={item.addedAt} albumUrl={item.coverUrl}
                                                   album={item.album}
                                                   trackLength={item.length} headings={headings}/></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Margin>
        </div>

    )
}