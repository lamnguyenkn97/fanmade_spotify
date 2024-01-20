import React from "react"

export type Heading1Prop = {
    text: string
}

export const Heading1 = ({text}: Heading1Prop)=>{
    return(
        <h1 className='dse-spotify-heading1'>{text}</h1>
    )
}