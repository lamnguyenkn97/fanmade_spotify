import React from 'react';
import {Body2} from "../typography";

export const Link = ({text, to, onClick}: {text: string, to: string, className?: string, onClick?: () => void})=>{
    return(
        <a className={'dse-spotify-link'} href={to} onClick={onClick}><Body2 text={text}/></a>
    )
}