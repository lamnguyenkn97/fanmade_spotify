import {Body3, Button, Card, Divider, Link, Stack, TextField, Title} from "../atoms";
import React from "react";
import {faApple, faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons"
import {NavBarLogin} from "../molecules/navBar";
import {Colors} from "@dse.e/foundation";

export const SignupPage = () => {
    return (
        <>
            <NavBarLogin/>
            <div className={'dse-spotify-signup'}>
                <Stack direction={'row'} justify={'space-around'} align={'center'} wrap={'nowrap'} backgroundColor={"#000"}>
                    <Card width={'30%'} height={'50%'} variant={'black'}>
                        <Stack direction={'column'} align={'center'} justify={'space-evenly'} wrap={'nowrap'}>
                            <Title color={'white'} text={'Signup to start listening'}/>
                            <TextField label={'Email address'} name={'email'} placeholder={'name@domain.com'}/>
                            <Stack width={'70%'} justify={'start'}>
                                <Link variant={'primary'} component={"Body3"} text={'Use phone number instead'} to={'/'} color={Colors.brandGreenHighlight}/>
                            </Stack>
                            <Button width={'300px'} size={'small'} variant={'primary'} text={'Next'} onClick={() => {
                            }}/>
                            <Divider width={'60%'} height={'0.2px'}/>
                            <Button width={'300px'} size={'small'} variant={'secondary'} text={'Signup with google'}
                                    onClick={() => {
                                    }} icon={faGoogle} iconSize={'xs'}/>
                            <Button width={'300px'} size={'small'} variant={'secondary'} text={'Signup with facebook'}
                                    onClick={() => {
                                    }} icon={faFacebook} iconSize={'xs'}/>
                            <Button width={'300px'} size={'small'} variant={'secondary'} text={'Signup with apple'}
                                    onClick={() => {
                                    }} icon={faApple} iconSize={'xs'}/>
                            <Divider width={'60%'} height={'0.2px'}/>
                            <Stack direction={'row'} justify={'center'} align={'center'} wrap={'nowrap'}>
                                <Body3 color={Colors.grey4} text={'Already have a account'}/>
                                <Link variant={'primary'} text={'Login here'} to={'/'} component={"Body3"}/>
                            </Stack>
                        </Stack>
                    </Card>
                </Stack>
            </div>

        </>
    )
}