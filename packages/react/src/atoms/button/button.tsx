import React from 'react';
import {IconProp, SizeProp} from "@fortawesome/fontawesome-svg-core";
import {SpotifyIcon} from "../icons";

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'white';
    size?: 'small' | 'medium' | 'large' | 'extra-small';
    text: string;
    onClick: () => void;
    children?: React.ReactNode;
    icon?: IconProp;
    iconSize?: SizeProp
    width?: string;
    height?: string;
    fontSize?: string;
}
export const Button = ({variant, size = 'medium', text, onClick, icon, iconSize, width, height, fontSize}: ButtonProps) => {
    const paddingClasses = ['dse-padding-right', 'dse-padding-left', 'dse-padding-top', 'dse-padding-bottom']
    const mappingSize = {
        'extra-small': 'xxs',
        'small': 'xs',
        'medium': 'md',
        'large': 'lg'
    }
    const style = {
        width,
        height
    }
    const mappedClasses = paddingClasses.map((paddingClass) => `${paddingClass}-${mappingSize[size]}`)
    return (
        <button style={style} className={`dse-spotify-${variant}-button ${mappedClasses.join(' ')} ${icon?' dse-spotify-stack-row-center-center-wrap-xxs': ''}`} onClick={onClick}>
            {icon && <SpotifyIcon icon={icon} size={iconSize || 'lg'} border={false}/>}
            <p style={{fontSize}}>{text}</p>
        </button>
    )

}