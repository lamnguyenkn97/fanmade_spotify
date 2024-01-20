import React from 'react';

type PanelProps = {
    variant: 'light' | 'medium' | 'dark' | 'black',
    width?: string | 0,
    height?: string | 0,
    padding?: string | 0,
    children: React.ReactNode
}

export const Panel: React.FC<PanelProps> = ({
                                                variant,
                                                width = '100%',
                                                height = '100%',
                                                padding = 0,
                                                children
                                            }: PanelProps) => {
    return (
        <div className={`dse-spotify-panel-${variant}`} style={{width, height, padding}}>{children}</div>
    )
}