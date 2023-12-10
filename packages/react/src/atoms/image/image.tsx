import React from 'react'
type ImageProps = {
    src: string;
    alt: string;
    width: string;
    height: string;
    variant?: 'round' | 'square';
}

export const Image = ({src, alt, width, height, variant='square'}: ImageProps) => {
    const style = {
        width: width,
        height: height,
        borderRadius: variant === 'round' ? '50%' : '0'
    }
    return (
        <img src={src} alt={alt} style={style}/>
    )
}