import {SpotifyIcon, Stack, TextField} from "../../atoms";
import React from "react";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Colors} from "@dse.e/foundation";


export const SearchInput = ({placeholder, onChange, value, name, label}: {
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    name: string,
    label?: string
}) => {
    return (
        <div className={'dse-spotify-search-input'}>
            <Stack direction={'row'} justify={'space-between'}>
                <SpotifyIcon icon={faSearch} size={'1x'} color={Colors.white} style={{position: 'relative', left: '50px'}}/>
                <TextField onChange={onChange} label={label} name={name} value={value} placeholder={placeholder}/>
            </Stack>
        </div>

    )
}