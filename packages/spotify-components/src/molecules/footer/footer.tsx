import React from 'react'
import {Body1, Body3, Margin, Stack} from "../../atoms";

export const Footer = () => {
    return(
        <footer className={'dse-spotify-footer'}>
            <Stack direction='row' justify={'start'} align={'start'} wrap={'nowrap'}>
                <Margin right size={'xxl'}>
                    <Stack direction='column' justify={'space-evenly'} align={'start'} wrap={'nowrap'}>
                        <Body1 text={'Company'} color={'white'}/>
                        <Body3 text={'About'} color={'white'}/>
                        <Body3 text={'Jobs'} color={'white'}/>
                        <Body3 text={'For the Record'} color={'white'}/>
                    </Stack>
                </Margin>
                <Margin right size={'xxl'}>
                <Stack direction='column' justify={'space-evenly'} align={'start'} wrap={'nowrap'}>
                    <Body1 text={'Communities'} color={'white'}/>
                    <Body3 text={'For Artists'} color={'white'}/>
                    <Body3 text={'Developers'} color={'white'}/>
                    <Body3 text={'Advertising'} color={'white'}/>
                    <Body3 text={'Investors'} color={'white'}/>
                    <Body3 text={'Vendors'} color={'white'}/>
                </Stack>
                </Margin>
                <Stack direction='column' justify={'space-evenly'} align={'start'} wrap={'nowrap'}>
                    <Body1 text={'Useful links'} color={'white'}/>
                    <Body3 text={'Support'} color={'white'}/>
                    <Body3 text={'Free Mobile App'} color={'white'}/>
                </Stack>
            </Stack>
        </footer>
    )
}