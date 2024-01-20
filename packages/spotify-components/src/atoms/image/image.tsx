import React from 'react'
import {imageSizes} from "./imageSizes";

type ImageProps = {
    src: string;
    alt: string;
    width?: string;
    height?: string;
    variant?: 'round' | 'square';
    imageSize?: keyof typeof imageSizes;
    onClick?: () => void;
}

export const Image = ({
                          src,
                          alt,
                          width = undefined,
                          height = undefined,
                          variant = 'square',
                          imageSize = undefined,
                          onClick = () => {
                          }
                      }: ImageProps) => {
    const style = {
        width: imageSize ? imageSizes[imageSize].toString() + 'px' : width,
        height: imageSize ? imageSizes[imageSize].toString() + 'px' : height,
        borderRadius: variant === 'round' ? '50%' : '0'
    }
    return (
        <img src={src} alt={alt} style={style} onClick={onClick}/>
    )
}