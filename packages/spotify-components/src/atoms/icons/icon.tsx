import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from "react";
import {IconProp, SizeProp} from "@fortawesome/fontawesome-svg-core";
import {Stack} from "../stack";


export const SpotifyIcon = ({icon, size, color, backgroundColor, border = false, iconButton = false, rounded=false}: {
    icon: IconProp,
    size: SizeProp,
    backgroundColor?: string,
    border?: boolean,
    color?: string,
    iconButton?: boolean
    rounded?: boolean
}) => {
    const style = {
        backgroundColor: backgroundColor
    }
    if (rounded) {
        return (
            <div className={'dse-spotify-rounded-icon'} style={style}>
                <Stack width={"100%"} height={"100%"} justify={"center"} align={"center"}>
                    <FontAwesomeIcon className={'dse-spotify-icon'} icon={icon}/>
                </Stack>
            </div>
        )
    }
    return (
        <FontAwesomeIcon className={iconButton ? 'dse-spotify-icon-button' : 'dse-spotify-icon'} icon={icon}
                         style={style} size={size} color={color}
                         border={border}/>
    )
}