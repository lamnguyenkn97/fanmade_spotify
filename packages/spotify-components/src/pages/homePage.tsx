import {Stack} from "../atoms";
import React from "react";
import {VerticalNavBar} from "../molecules/navBar/verticalNavBar";
import {PlaylistPage} from "../organism";
import {Colors} from "@dse.e/foundation/lib/color";

export const HomePage = () => {
    return (
        <Stack gap={'0'} align={"start"} backgroundColor={Colors.black} height={'150vh'} width={'100%'}>
            <VerticalNavBar/>
            <PlaylistPage/>
        </Stack>
    )
}