import React from 'react';

type CardProps = {
    variant: 'light' | 'medium' | 'dark' | 'black',
    width?: string | 0,
    height?: string | 0,
    padding?: string | 0,
    children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
                                              variant,
                                              width = '100%',
                                              height = '100%',
                                              padding = 0,
                                              children
                                          }: CardProps) => {
    return (
        <div className={`dse-spotify-card-${variant}`} style={{width, height, padding}}>{children}</div>
    )
}