import React from 'react';
import {Body2, Body1, Body3, Subtitle} from "../typography";


type LinkProps = {
    text: string,
    to: string,
    onClick?: () => void,
    variant?: 'primary' | 'secondary' | 'third'
    component?: 'Body1' | 'Body2' | 'Body3' | 'Subtitle'
    color?: string

}
export const Link = ({text, to, onClick, variant = 'secondary', component='Body2', color='white'}: LinkProps) => {
    return (
        <a className={'dse-spotify-link-' + variant} href={to} onClick={onClick}>
            {component === 'Body2' && <Body2 text={text} color={color} />}
            {component === 'Body1' && <Body1 text={text} color={color} />}
            {component === 'Body3' && <Body3 text={text} color={color} />}
            {component === 'Subtitle' && <Subtitle text={text} color={color} />}
        </a>
    )
}