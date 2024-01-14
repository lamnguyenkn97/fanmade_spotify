import React from 'react';
import {Colors} from "@dse.e/foundation/lib/color";
import {VerticalNavBar} from "../molecules/navBar/verticalNavBar";
import {Stack} from "../atoms";
import {TrackList} from "../organism";


export const SongListPage = () => {
    return (
        <Stack gap={'0'} backgroundColor={Colors.black} height={'150vh'}>
            <VerticalNavBar/>
            <TrackList />
        </Stack>
    )
}