import React from 'react'
import {Image, Padding, Subtitle} from "../../atoms";

type GenreCardProps = {
    genre: string,
    artworkUrl: string,
    backgroundColor: string,
    onClick: () => void
}


export const GenreCard: React.FC<GenreCardProps> = ({genre, artworkUrl, backgroundColor, onClick}: GenreCardProps) => {
    return (

        <div className="dse-spotify-genre-card" onClick={onClick} style={{backgroundColor}}>
            <Padding size={'xs'} left>
                <Subtitle text={genre} color={"white"}/>
            </Padding>
            <Image imageSize={"large"} src={artworkUrl} alt={'artwork'}/>
        </div>

    )
}