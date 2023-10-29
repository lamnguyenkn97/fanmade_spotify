import React from "react"

export type Heading2Prop = {
    text: string
}

export const Heading2 = ({text}: Heading2Prop)=>{
    return(
        <h2 className='.dse-spotify-heading2'>{text}</h2>
    )
}