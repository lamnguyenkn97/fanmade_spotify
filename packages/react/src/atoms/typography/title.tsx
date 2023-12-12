import React from "react"

type TitleProp = {
    text: string
    color?: string
}

export const Title = ({text, color}: TitleProp)=>{
    return(
        <h2 className='dse-spotify-title1' style={{color}}>{text}</h2>
    )
}