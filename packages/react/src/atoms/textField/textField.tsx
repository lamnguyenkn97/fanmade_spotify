import React from 'react';

type TextFieldProps = {
    label: string;
    name: string;
    placeholder: string
}

export const TextField = ({label, name, placeholder}: TextFieldProps) => {
    return (
        <>
            <input id='textField' name={name} placeholder={placeholder}/>
            <label htmlFor='textField'>{label}</label>
        </>

    );
}