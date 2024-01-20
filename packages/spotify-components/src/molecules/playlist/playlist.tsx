import {Body2, Body3, Card, Image, Margin} from "../../atoms";
import React from "react";
import {Colors} from "@dse.e/foundation/lib/color";

type PlaylistProps = {
    name: string;
    description: string;
    imageSrc: string;
}

export const Playlist = ({name, description, imageSrc}: PlaylistProps) => {
    return (
        <div className={'dse-spotify-playlist'}>
            <Card variant={'light'} width={'100%'} height={'100%'}>
                <Image src={imageSrc} alt={'Playlist Image'}
                       width={'100%'} height={'70%'}/>
                <Margin left top bottom size={'xxs'}>
                    <Body2 color={Colors.white} text={name}/>
                </Margin>
                <Margin left top bottom size={'xxs'}>
                    <Body3 color={Colors.grey6} text={description}/>
                </Margin>
            </Card>
        </div>


    )

}