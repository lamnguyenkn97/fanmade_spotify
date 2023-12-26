import React from 'react';
import {Body2, Body1, Body3} from "../typography";


type LinkProps = {
    text: string,
    to: string,
    onClick?: () => void,
    variant?: 'primary' | 'secondary' | 'third'
    component?: 'Body1' | 'Body2' | 'Body3'

}
export const Link = ({text, to, onClick, variant = 'secondary', component='Body2'}: LinkProps) => {
    return (
        <a className={'dse-spotify-link-' + variant} href={to} onClick={onClick}>
            {component === 'Body2' && <Body2 text={text} />}
            {component === 'Body1' && <Body1 text={text} />}
            {component === 'Body3' && <Body3 text={text} />}
        </a>
    )
}