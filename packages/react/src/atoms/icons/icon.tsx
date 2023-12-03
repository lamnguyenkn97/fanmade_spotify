import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import {IconProp, SizeProp} from "@fortawesome/fontawesome-svg-core";


export const SpotifyIcon = ({icon, size, color,backgroundColor, border=false}: {icon: IconProp, size: SizeProp, backgroundColor?: string, border?:boolean, color?: string})=>{

    const style = {
        backgroundColor: backgroundColor
    }
    return(
        <FontAwesomeIcon className={'dse-spotify-icon'} icon={icon} style={style} size={size} color={color} border={border}/>
    )
}