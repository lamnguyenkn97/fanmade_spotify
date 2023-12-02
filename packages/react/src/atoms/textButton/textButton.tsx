import React from 'react';
import {Body2} from "../typography";

type TextButtonProps = {
    variant?: 'primary' | 'secondary'
    text: string;
    onClick: () => void;
    children?: React.ReactNode;
}
export const TextButton = ({variant,  text, onClick}: TextButtonProps) => {

    return(
        <Body2 className={`dse-spotify-${variant}-text-button`} onClick={onClick} text={text} />
    )

}