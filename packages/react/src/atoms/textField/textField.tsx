import React from 'react';
import {Stack} from "../stack";

type TextFieldProps = {
    label: string;
    name: string;
    placeholder: string
    password?: boolean
}

export const TextField = ({label, name, placeholder, password=false}: TextFieldProps) => {
    return (
        <Stack className='dse-spotify-text-field' direction={'column'} justify={'space-evenly'} align={'start'} wrap={'nowrap'}>
            <label htmlFor='textField'>{label}</label>
            <input type={password? 'password': 'text'} id='textField' name={name} placeholder={placeholder}/>
        </Stack>

    );
}