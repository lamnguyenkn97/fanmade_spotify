import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from "react";
import {IconProp, SizeProp} from "@fortawesome/fontawesome-svg-core";


export const SpotifyIcon = ({icon, size, color, backgroundColor, border = false, iconButton = false}: {
    icon: IconProp,
    size: SizeProp,
    backgroundColor?: string,
    border?: boolean,
    color?: string,
    iconButton?: boolean
}) => {
    const style = {
        backgroundColor: backgroundColor
    }
    return (
        <FontAwesomeIcon className={iconButton ? 'dse-spotify-icon-button' : 'dse-spotify-icon'} icon={icon}
                         style={style} size={size} color={color}
                         border={border}/>
    )
}