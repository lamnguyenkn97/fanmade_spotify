import React from 'react'
import {Body1, Body3, Stack} from "../../atoms";

export const Footer = () => {
    return(
        <footer className={'dse-spotify-footer'}>
            <Stack direction='row' justify={'space-evenly'} align={'start'} wrap={'nowrap'}>
                <Stack direction='column' justify={'space-evenly'} align={'start'} wrap={'nowrap'}>
                    <Body1 text={'Company'}/>
                    <Body3 text={'About'}/>
                    <Body3 text={'Jobs'}/>
                    <Body3 text={'For the Record'}/>
                </Stack>
                <Stack direction='column' justify={'space-evenly'} align={'start'} wrap={'nowrap'}>
                    <Body1 text={'Communities'}/>
                    <Body3 text={'For Artists'}/>
                    <Body3 text={'Developers'}/>
                    <Body3 text={'Advertising'}/>
                    <Body3 text={'Investors'}/>
                    <Body3 text={'Vendors'}/>
                </Stack>
                <Stack direction='column' justify={'space-evenly'} align={'start'} wrap={'nowrap'}>
                    <Body1 text={'Useful links'}/>
                    <Body3 text={'Support'}/>
                    <Body3 text={'Free Mobile App'}/>
                </Stack>
            </Stack>
        </footer>
    )
}