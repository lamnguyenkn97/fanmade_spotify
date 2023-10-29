import React from "react"


type Body1Prop = {
    text: string
}

export const Body1 = ({text}: Body1Prop)=>{
    return(
        <p className='.dse-spotify-body1'>{text}</p>
    )
}