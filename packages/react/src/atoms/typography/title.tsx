import React from "react"


type TitleProp = {
    text: string
}

export const Title = ({text}: TitleProp)=>{
    return(
        <h2 className='dse-spotify-title1'>{text}</h2>
    )
}