import {Body2, Button, Card, Divider, Link, Stack, TextField, Title} from "../atoms";
import React from "react";
import {faApple, faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons"
import {NavBarLogin} from "../molecules/navBar";
import {Colors} from "@dse.e/foundation/lib/color";
import {Toggle} from "../atoms/toggleButton";
export const LoginPage = () => {
    return (
        <>
            <NavBarLogin />
            <div className={'dse-spotify-login'}>
                <Stack direction={'row'} justify={'space-around'} align={'center'} wrap={'nowrap'}>
                    <Card width={'50%'} height={'50%'} variant={'black'}>
                        <Stack direction={'column'} align={'center'} justify={'space-evenly'} wrap={'nowrap'}>
                            <Title color={'white'} text={'Login to Spotify'}/>
                            <Button width={'300px'} size={'small'} variant={'secondary'} text={'Continue with google'} onClick={()=> {}} icon={faGoogle} iconSize={'xs'}/>
                            <Button width={'300px'} size={'small'} variant={'secondary'} text={'Continue with facebook'} onClick={()=> {}} icon={faFacebook} iconSize={'xs'}/>
                            <Button width={'300px'} size={'small'} variant={'secondary'} text={'Continue with apple'} onClick={()=> {}} icon={faApple} iconSize={'xs'}/>
                            <Button width={'300px'} size={'small'} variant={'secondary'} text={'Continue with phone number'} onClick={()=> {}} iconSize={'xs'}/>
                            <Divider width={'60%'} height={'0.2px'} />
                            <TextField label={'Email or username'} name={'email'} placeholder={'Email or username'} />
                            <TextField label={'Password'} name={'password'} placeholder={'Password'} password />
                            <div className={'dse-spotify-login-toggle'}>
                                <Toggle />
                            </div>
                            <Button width={'300px'} size={'small'} variant={'primary'} text={'Login'} onClick={()=> {}}/>
                            <Link variant={'primary'} text={'Forgot your account'} to={'/'}/>
                            <Divider width={'60%'} height={'0.2px'} />
                            <Stack direction={'row'} justify={'center'} align={'center'} wrap={'nowrap'}>
                                <Body2 color={Colors.grey4} text={'Don\'t have a account'}/>
                                <Link variant={'primary'} text={'Sign up for Spotify'} to={'/'}/>
                            </Stack>
                        </Stack>
                    </Card>
                </Stack>
            </div>

        </>
    )
}