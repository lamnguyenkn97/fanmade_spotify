import React from "react"


type Heading3Prop = {
    text: string
}

export const Heading3 = ({text}: Heading3Prop)=>{
    return(
        <h3 className='dse-spotify-heading3'>{text}</h3>
    )
}