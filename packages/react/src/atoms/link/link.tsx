import React from 'react';

export const Link = ({text, to, onClick}: {text: string, to: string, className?: string, onClick?: () => void})=>{
    return(
        <a className={'dse-spotify-link'} href={to} onClick={onClick}>{text}</a>
    )
}