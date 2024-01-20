import {Panel, Stack} from "../../atoms";
import {HomeCards} from "../infoCards";
import React from "react";
import {LibraryCards} from "../infoCards/libraryCards";

export const VerticalNavBar = () => {
    return (
        <Panel variant={'black'} width={'30%'} height={'150vh'}>
            <Stack direction={'column'} justify={'space-between'} align={'start'} height={'100%'}>
                <HomeCards />
                <LibraryCards />
            </Stack>
        </Panel>
    )
}