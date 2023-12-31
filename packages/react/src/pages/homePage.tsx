import {Stack} from "../atoms";
import React from "react";
import {VerticalNavBar} from "../molecules/navBar/verticalNavBar";
import {PlaylistPage} from "../organism";
import {Colors} from "@dse.e/foundation/lib/color";

export const HomePage = () => {
    return(
        <Stack gap={'0'} backgroundColor={Colors.black} height={'150vh'}>
            <VerticalNavBar />
            <PlaylistPage />
        </Stack>
    )
}