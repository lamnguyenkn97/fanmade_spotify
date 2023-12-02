import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import {IconProp, SizeProp} from "@fortawesome/fontawesome-svg-core";


export const SpotifyIcon = ({icon, size, border=false}: {icon: IconProp, size: SizeProp, border?:boolean})=>{
    const borderIconStyle =  {}
    return(
        <FontAwesomeIcon className={'dse-spotify-icon'} icon={icon} size={size} style={border?borderIconStyle: {}} border={border}/>
    )
}