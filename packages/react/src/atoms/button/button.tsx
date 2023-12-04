import React from 'react';
import {IconProp, SizeProp} from "@fortawesome/fontawesome-svg-core";
import {SpotifyIcon} from "../icons";

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'white';
    size?: 'small' | 'medium' | 'large';
    text: string;
    onClick: () => void;
    children?: React.ReactNode;
    icon?: IconProp;
    iconSize?: SizeProp
}
export const Button = ({variant, size = 'medium', text, onClick, icon, iconSize}: ButtonProps) => {
    const paddingClasses = ['dse-padding-right', 'dse-padding-left', 'dse-padding-top', 'dse-padding-bottom']
    const mappingSize = {
        'small': 'xxs',
        'medium': 'md',
        'large': 'lg'
    }
    const mappedClasses = paddingClasses.map((paddingClass) => `${paddingClass}-${mappingSize[size]}`)
    return (
        <button className={`dse-spotify-${variant}-button ${mappedClasses.join(' ')} ${icon?' dse-spotify-stack-row-center-center-wrap-xxs': ''}`} onClick={onClick}>
            {icon && <SpotifyIcon icon={icon} size={iconSize || 'lg'} border={false}/>}
            <div>{text}</div>
        </button>
    )

}