import React from 'react';
import {Body2} from "../typography";
import {IconProp, SizeProp} from "@fortawesome/fontawesome-svg-core";
import {Stack} from "../stack";
import {SpotifyIcon} from "../icons";
import {Colors} from "@dse.e/foundation/lib/color";

type TextButtonProps = {
    variant?: 'primary' | 'secondary'
    text: string;
    onClick: () => void;
    children?: React.ReactNode;
    icon?: IconProp;
    iconSize?: SizeProp;
}
export const TextButton = ({variant,  text, onClick, icon, iconSize}: TextButtonProps) => {
    if (icon) {
        return (
            <Stack direction={'row'} align={'center'} wrap={'nowrap'} justify={'space-between'}>
                <SpotifyIcon icon={icon} size={iconSize || 'lg'} color={Colors.grey6} />
                <Body2 className={`dse-spotify-${variant}-text-button`} onClick={onClick} text={text} />
            </Stack>
        )
    }
    return(
        <Body2 className={`dse-spotify-${variant}-text-button`} onClick={onClick} text={text} />
    )

}