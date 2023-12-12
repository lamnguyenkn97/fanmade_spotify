import React from 'react';

type CardProps = {
    variant: 'light' | 'medium' | 'dark' | 'black',
    width: string,
    height: string,
    children: React.ReactNode
}

export const Card = ({variant, width, height, children}: CardProps)=>{
    return(
        <div className={`dse-spotify-card-${variant}`} style={{width, height}}>{children}</div>
    )
}