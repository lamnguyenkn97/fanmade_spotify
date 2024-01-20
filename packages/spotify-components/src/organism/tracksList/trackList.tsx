import {Margin, SpotifyTable, Stack} from "../../atoms"
import React from 'react'
import songData from '../../../data/songs.json'
import moment from 'moment';
import {PlaylistCover} from "../playlistCover";
import {Header} from "../../molecules";

export const TrackList = () => {
    const songLists = songData.data.playlistV2.content.items.map(
        (item: any) => ({
            title: item.itemV2.data.name,
            artist: item.itemV2.data.artists.items.map((i: any) => i.profile.name).join(', '),
            album: item.itemV2.data.albumOfTrack.name,
            length: (item.itemV2.data.trackDuration.totalMilliseconds / (1000 * 60)).toFixed(2),
            coverUrl: item.itemV2.data.albumOfTrack.coverArt.sources[0].url,
            addedAt: moment().diff(moment(item.addedAt.isoString), 'weeks') + ' weeks ago'
        })
    )
    console.log('TRACK LIST', songLists)
    const headers = [{title: '#', size: 0.5}, {title: 'Title', size: 4}, {title: 'Album', size: 3}, {
        title: 'Date Added', size: 3.5}, {title: 'Duration', size: 1}]
    return (
        <Stack direction={'column'} width={'70%'} height={'100%'} gap={'0'}>
            <div className={'dse-spotify-playlist-cover'}>
                <Header transparent/>
                <Margin bottom top left size={"md"}>
                    <PlaylistCover/>
                </Margin>
            </div>
            <SpotifyTable headings={headers} data={songLists}/>
        </Stack>
    )
}