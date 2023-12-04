import React from "react"


type SubtitleProp = {
    text: string
}

export const Subtitle = ({text}: SubtitleProp)=>{
    return(
        <h2 className='dse-spotify-subtitle'>{text}</h2>
    )
}