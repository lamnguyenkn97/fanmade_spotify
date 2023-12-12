import React from 'react';
import {Body2} from "../typography";

export const Link = ({text, to, onClick, variant='secondary'}: {variant?: 'primary' | 'secondary' ,text: string, to: string, className?: string, onClick?: () => void})=>{
    return(
        <a className={'dse-spotify-link-' + variant} href={to} onClick={onClick}><Body2 text={text}/></a>
    )
}