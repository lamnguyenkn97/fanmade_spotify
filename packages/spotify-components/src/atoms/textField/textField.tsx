import React from 'react';
import {Stack} from "../stack";

type TextFieldProps = {
    label?: string;
    name: string;
    placeholder: string
    password?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
}

export const TextField = ({label, name, placeholder, password=false, onChange, value}: TextFieldProps) => {
    return (
        <Stack className='dse-spotify-text-field' direction={'column'} justify={'space-evenly'} align={'start'} wrap={'nowrap'}>
            {label && <label htmlFor='textField'>{label}</label>}
            <input type={password? 'password': 'text'} value={value} id='textField' name={name} placeholder={placeholder} onChange={onChange}/>
        </Stack>

    );
}