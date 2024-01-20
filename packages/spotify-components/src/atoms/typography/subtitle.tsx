import React from "react"


type SubtitleProp = {
    text: string
    color?: string
}

export const Subtitle = ({text, color}: SubtitleProp)=>{
    return(
        <h2 className='dse-spotify-subtitle' style={color?{color}: {}}>{text}</h2>
    )
}