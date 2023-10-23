import React from "react";


interface ButtonProps {
    label: string;
}

export const Button: React.FC<ButtonProps> =  ({ label }: ButtonProps) => {
    return (
        <button className='dse-spotify-button-container'>{label}</button>
    );
}
