import React from 'react';
import {Card, Stack, TextButton} from "../../atoms";
import {faHome, faSearch} from "@fortawesome/free-solid-svg-icons";
export const HomeCards = () => {
    return(
        <Card variant={'dark'} width={'200px'} height={'400px'}>
            <Stack direction={'column'} wrap={'nowrap'} justify={'space-evenly'} align={'start'}>
                <TextButton variant={'primary'} text={'Home'} onClick={()=> {}} icon={faHome}/>
                <TextButton variant={'primary'} text={'Search'} onClick={()=> {}} icon={faSearch}/>
            </Stack>
        </Card>
    )
}